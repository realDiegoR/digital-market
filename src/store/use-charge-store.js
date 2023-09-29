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
	removeProduct: (productToDelete) =>
		set((state) => ({
			products: state.products.filter((product) => product.name !== productToDelete.name),
		})),
	incrementStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
	decrementStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
	reset: () => set(initialState),
}));
