import React from 'react';
import { FormState } from './FormDataSingleStateObject';

function FormDataDisplay({ firstName, lastName, city, state }: FormState) {
	return (
		<div>
			<p>Form data</p>
			<ul>
				<li>First Name: {firstName}</li>
				<li>Last Name: {lastName}</li>
				<li>City: {city}</li>
				<li>State: {state}</li>
			</ul>
		</div>
	);
}

export default FormDataDisplay;
