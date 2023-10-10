export const businessSlice = (set) => ({
	sale: {},
	updateBusiness: (businessInfo) => set(() => ({ business: businessInfo })),
	user: {},
	updateUser: (userInfo) => set(() => ({ user: userInfo })),
});
