import { BusinessInformation } from '@/components/';
import { Button, LoadingSpinner, PageTitle, Wrapper } from '@/common/';
import { useFetch } from '@/hooks/';
import { getAllSales } from '@/services/sales';

export const SalesPage = () => {
	const getBusinessSales = async () => {
		const fakeBusinessId = 1;
		const res = await getAllSales(fakeBusinessId);
		return res;
	};

	const { data, status } = useFetch({
		cacheId: 'sales',
		queryFunction: getBusinessSales,
		select: (sales) =>
			sales.map((sale) => ({
				codigo: sale.id,
				cliente: sale.cliente.perfil.nombre,
				vendedor: sale.usuario.perfil.nombre,
				total: sale.total,
				fecha: new Intl.DateTimeFormat('es-AR').format(new Date(sale.createdAt)),
			})),
	});

	if (status === 'loading') {
		return <LoadingSpinner />;
	}

	return (
		<>
			<PageTitle>Lista de Ventas</PageTitle>
			<Wrapper>
				<div className="my-14">
					<BusinessInformation data={data} />
				</div>
				<section className="space-y-5">
					<Button width="full">Ver detalles de selección</Button>
					<Button width="full" variant="secondary">
						Modificar selección
					</Button>
					<Button width="full" variant="danger">
						Eliminar selección
					</Button>
				</section>
			</Wrapper>
		</>
	);
};
