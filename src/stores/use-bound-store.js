import { create } from 'zustand';
import { businessSlice } from './business-slice';
import { chargePersonSlice } from './charge-person-slice';
import { saleSlice } from './sale-slice';

export const useBoundStore = create((...a) => ({
	...businessSlice(...a),
	...chargePersonSlice(...a),
	...saleSlice(...a),
}));
