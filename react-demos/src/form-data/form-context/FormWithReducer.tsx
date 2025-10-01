import React, { useReducer } from 'react';
import FormDataDisplay from '../FormDataDisplay';
import TextInput from './TextInput';

const initialState = {
	firstName: '',
	lastName: '',
	city: '',
	state: '',
};

export type FormState = typeof initialState;

interface Action {
	type: string;
	value: string;
}

function reducer(state: FormState, action: Action) {
	switch (action.type) {
		case 'change_firstName':
			return { ...state, firstName: action.value };
		case 'change_lastName':
			return { ...state, lastName: action.value };
		case 'change_city':
			return { ...state, city: action.value };
		case 'change_state':
			return { ...state, state: action.value };
		default:
			throw Error(`Unknown action: ${action.type}`);
	}
}

function FormWithReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);

	function handleFormUpdate(event: React.ChangeEvent<HTMLInputElement>) {
		let field = event.target.name;
		let value = event.target.value;

		dispatch({
			type: `change_${field}`,
			value,
		});
	}

	return (
		<>
			<h3>Form a reducer</h3>
			<div className="row">
				<div className="col">
					<form>
						{/* First Name */}
						<TextInput
							name="firstName"
							updateForm={handleFormUpdate}
							value={state.firstName}
						>
							First Name:
						</TextInput>
						{/* Last Name */}
						<TextInput
							name="lastName"
							updateForm={handleFormUpdate}
							value={state.lastName}
						>
							Last Name:
						</TextInput>
						{/* City */}
						<TextInput
							name="city"
							updateForm={handleFormUpdate}
							value={state.city}
						>
							City:
						</TextInput>
						{/* State */}
						<TextInput
							name="state"
							updateForm={handleFormUpdate}
							value={state.state}
						>
							State:
						</TextInput>
					</form>
				</div>
				<div className="col">
					<FormDataDisplay
						firstName={state.firstName}
						lastName={state.lastName}
						city={state.city}
						state={state.state}
					/>
				</div>
			</div>
		</>
	);
}

export default FormWithReducer;
