import { create } from 'zustand';

const initialState = {
	currentStep: 1,
	subject: '',
	products: [],
};

export const useChargeStore = create((set) => ({
	currentStep: 1,
	subject: '',
	products: [],
	setSubject: (newSubject) => set(() => ({ subject: newSubject })),
	addProduct: (newProduct) =>
		set((state) => ({ products: state.products.push(newProduct) && state.products })),
	removeProduct: (productName) =>
		set((state) => ({
			products: state.products.filter((product) => product.producto !== productName),
		})),
	changeProductQuantity: (productName, operand) =>
		set((state) => {
			const productIndex = state.products.findIndex((p) => p.producto === productName);
			const newProductList = [...state.products];
			const currentQuantity = newProductList[productIndex].cantidad;
			if (currentQuantity === 1 && operand < 0) return {};
			newProductList[productIndex].cantidad = Number(currentQuantity) + operand;
			return {
				products: newProductList,
			};
		}),
	incrementStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
	decrementStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
	reset: () => set(initialState),
}));
