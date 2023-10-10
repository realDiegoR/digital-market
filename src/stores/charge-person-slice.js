const initialState = {
	subject: '',
	products: [],
};

const flattenObjectProperties = (object) => {
	const newObj = {};

	const flatten = (obj) => {
		for (const key in obj) {
			if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
				flatten(obj[key]);
			} else {
				newObj[key] = obj[key];
			}
		}
	};

	flatten(object);

	return newObj;
};

export const chargePersonSlice = (set) => ({
	subject: '',
	products: [],
	setSubject: (newSubject) => set(() => ({ subject: newSubject })),
	addProduct: (newProduct) =>
		set((state) => {
			const newProductList = [...state.products];
			const flattenedProduct = flattenObjectProperties(newProduct);

			const sameProductIndex = newProductList.findIndex(
				(product) => product.nombre === flattenedProduct.nombre
			);

			if (sameProductIndex !== -1) {
				newProductList[sameProductIndex].cantidad = Number(flattenedProduct.cantidad);
			} else {
				newProductList.push(flattenedProduct);
			}

			return { products: newProductList };
		}),
	removeProduct: (productName) =>
		set((state) => ({
			products: state.products.filter((product) => product.nombre !== productName),
		})),
	reset: () => set(initialState),
});
