import React from 'react';
import { Provider } from 'react-redux';
import { store } from './counter-slice';
import ReduxCounter from './ReduxCounter';

export default function ReduxContainer() {
	return (
		<Provider store={store}>
			<ReduxCounter />
		</Provider>
	);
}
