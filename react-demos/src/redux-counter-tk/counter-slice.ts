import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
	},
});

/*
let reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		default:
			return state;
	}
};
*/

const { actions } = counterSlice;
export const { increment, decrement } = actions;

export const store = configureStore({
	reducer: combineReducers({
		counter: counterSlice.reducer,
	}),
});

export type CounterState = ReturnType<typeof store.getState>;
export type CounterDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<CounterDispatch>();
export const useAppSelector: TypedUseSelectorHook<CounterState> = useSelector;
