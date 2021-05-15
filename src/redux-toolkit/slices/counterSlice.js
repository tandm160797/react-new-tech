import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const slice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increase(state, action) {
			return state + 1;
		},
		decrease(state, action) {
			return state - 1;
		},
		exponent(state, action) {
			return Math.pow(state, action.payload);
		}
	}
});

const { reducer, actions } = slice;
const { increase, decrease } = actions;

export { increase, decrease };
export default reducer;
