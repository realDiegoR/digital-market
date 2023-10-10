export const businessSlice = (set) => ({
	business: {},
	updateBusiness: (businessInfo) => set(() => ({ business: businessInfo })),
	user: {},
	updateUser: (userInfo) => set(() => ({ user: userInfo })),
});
