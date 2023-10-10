import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as SaleServices from '@/services/sales';

export function useSale(client) {
	const queryClient = useQueryClient();
	const fakeBusinessId = 1;

	const { data: sales } = useQuery({
		queryKey: ['sales', fakeBusinessId],
		queryFn: () => SaleServices.getAllSales(fakeBusinessId),
	});

	const activeSale = sales?.find((sale) => sale.clienteId === client?.id);

	const clientSale = queryClient.getQueryData(['sales', fakeBusinessId, activeSale?.id]);

	const getActiveSale = async (client) => {
		const activeSale = sales?.find((sale) => sale.clienteId === client?.id);

		try {
			const sale = await queryClient.fetchQuery({
				queryKey: ['sales', fakeBusinessId, activeSale.id],
				queryFn: () => SaleServices.getSale(fakeBusinessId, activeSale.id),
			});
			return sale;
		} catch (err) {
			console.error(err);
			return null;
		}
	};

	const createSale = useMutation({
		mutationFn: (clientId) =>
			SaleServices.createSale({ negocioId: fakeBusinessId, usuarioId: 1, clienteId: clientId }),
		onSuccess: ({ data }) => {
			console.log(data);
			queryClient.setQueryData(['sales', fakeBusinessId, data.id], data);
		},
	});

	const addProductToSale = useMutation({
		mutationFn: (newProduct) =>
			SaleServices.addItemToSale({
				negocioId: fakeBusinessId,
				ventaId: clientSale.id,
				...newProduct,
			}),
	});

	const removeProductToSale = useMutation({
		mutationFn: (productId) =>
			SaleServices.removeItemFromSale(fakeBusinessId, clientSale.id, productId),
	});

	const addPayment = useMutation({
		mutationFn: (newPayment) => SaleServices.addChargeToSale(newPayment),
	});

	const removePayment = useMutation({
		mutationFn: (saleId, paymentId) => SaleServices.removeChargeFromSale(saleId, paymentId),
	});

	const addPendingPayment = useMutation({
		mutationFn: (newPayment) => SaleServices.addPendingChargeToSale(newPayment),
	});

	const finalizeSale = useMutation({
		mutationFn: (saleId) => SaleServices.finalizeSale(fakeBusinessId, saleId),
	});

	const removePendingPayment = useMutation({
		mutationFn: (saleId, paymentId) =>
			SaleServices.removePendingChargeFromSale(fakeBusinessId, saleId, paymentId),
	});

	const deleteSale = useMutation({
		mutationFn: (newSale) => SaleServices.deleteSale(newSale),
	});

	return {
		getActiveSale,
		clientSale,
		createSale,
		addProductToSale,
		removeProductToSale,
		addPayment,
		removePayment,
		addPendingPayment,
		finalizeSale,
		removePendingPayment,
		deleteSale,
	};
}
