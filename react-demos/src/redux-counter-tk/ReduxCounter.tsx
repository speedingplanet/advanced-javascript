import React from 'react';
import Counter from './Counter';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, useAppDispatch, useAppSelector } from './counter-slice';

const BetterReduxCounter = () => {
	// Dispatch actions to the store, typed
	const dispatch = useAppDispatch();

	// Dispatch actions to the store, untyped
	// const untypedDispatch = useDispatch();

	// Receive updates from the store, manually typed
	// const untypedCount = useSelector((state: CounterState) => state.counter);

	// Receive updates from the store, typed
	const count = useAppSelector((state) => state.counter);

	const dispatchIncrement = () => {
		dispatch(increment());
	};

	return (
		<Counter
			increment={dispatchIncrement}
			decrement={() => dispatch(decrement())}
			value={count}
		/>
	);
};

export default BetterReduxCounter;
