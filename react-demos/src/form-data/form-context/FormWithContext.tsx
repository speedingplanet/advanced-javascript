import React, { useState, createContext } from 'react';
import FormDataDisplay from '../FormDataDisplay';
import TextInput from './TextInput';

const initialState = {
	firstName: '',
	lastName: '',
	city: '',
	state: '',
};

export type FormState = typeof initialState;

interface FormContextProps {
	state: FormState;
	updater: (field: string, value: string) => void;
}

export const FormContext = createContext<FormContextProps | null>(null);

function FormWithContext() {
	const [formState, setFormState] = useState<FormState>(initialState);

	/*
	function handleFormUpdate(event: React.ChangeEvent<HTMLInputElement>) {
		let field = event.target.name;
		let value = event.target.value;

		let nextState = { ...formState };
		nextState[field as keyof FormState] = value;

		setFormState(nextState);
	}
	*/

	function updateState(field: string, value: string) {
		let nextState = { ...formState };
		nextState[field as keyof FormState] = value;

		setFormState(nextState);
	}

	let contextValue: FormContextProps = {
		state: formState,
		updater: updateState,
	};

	return (
		<FormContext.Provider value={contextValue}>
			<h3>Form with context</h3>
			<div className="row">
				<div className="col">
					<form>
						{/* First Name */}
						<TextInput name="firstName">First Name:</TextInput>
						{/* Last Name */}
						<TextInput name="lastName">Last Name:</TextInput>
						{/* City */}
						<TextInput name="city">City:</TextInput>
						{/* State */}
						<TextInput name="state">State:</TextInput>
					</form>
				</div>
				<div className="col">
					<FormDataDisplay
						firstName={formState.firstName}
						lastName={formState.lastName}
						city={formState.city}
						state={formState.state}
					/>
				</div>
			</div>
		</FormContext.Provider>
	);
}

export default FormWithContext;
