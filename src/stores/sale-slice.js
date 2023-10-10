const initialData = {
	id: undefined,
	negocioId: undefined,
	clienteId: undefined,
	usuarioId: undefined,
	confirmDeposito: undefined,
	confirmCobro: undefined,
	confirmCobroPendiente: undefined,
	createdAt: undefined,
	total: 1200,
	cliente: undefined,
	usuario: undefined,
	items: undefined,
	cobros: undefined,
	cobrosPendientes: undefined,
};

export const saleSlice = (set) => ({
	sale: initialData,
	updateSale: (sale) => set((state) => ({ sale: { ...state.sale, ...sale } })),
	addPaymentToSaleUI: (payment) =>
		set((state) => {
			const newPaymentList = [...state.sale.cobros];
			const paymentWithOrderedProps = {
				id: payment.id,
				negocioId: payment.negocioId,
				ventaId: payment.ventaId,
				cuentaId: payment.cuentaId,
				monto: payment.monto,
				createdAt: payment.createdAt,
			};
			console.log(paymentWithOrderedProps);
			newPaymentList.push(paymentWithOrderedProps);
			return { sale: { ...state.sale, cobros: newPaymentList } };
		}),
});
