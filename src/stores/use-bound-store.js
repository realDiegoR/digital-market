import { create } from 'zustand';
import { businessSlice } from './business-slice';
import { chargePersonSlice } from './charge-person-slice';

export const useBoundStore = create((...a) => ({
	...businessSlice(...a),
	...chargePersonSlice(...a),
}));
