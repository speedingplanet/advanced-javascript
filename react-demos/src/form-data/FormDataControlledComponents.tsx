import React, { useState } from 'react';
import FormDataDisplay from './FormDataDisplay';

function FormDataControlledComponents() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');

	function handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		setFirstName(event.target.value);
	}

	function handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		setLastName(event.target.value);
	}

	function handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
		setCity(event.target.value);
	}

	function handleStateChange(event: React.ChangeEvent<HTMLInputElement>) {
		setState(event.target.value);
	}

	return (
		<>
			<h3>Controlled Components</h3>
			<div className="row">
				<div className="col">
					<form>
						{/* First Name */}
						<div>
							<label htmlFor="first-name">First Name: </label>
						</div>
						<div>
							<input
								type="text"
								name="first-name"
								id="first-name"
								value={firstName}
								onChange={handleFirstNameChange}
							/>
						</div>
						{/* Last Name */}
						<div>
							<label htmlFor="last-name">Last Name: </label>
						</div>
						<div>
							<input
								type="text"
								name="last-name"
								id="last-name"
								value={lastName}
								onChange={handleLastNameChange}
							/>
						</div>
						{/* City */}
						<div>
							<label htmlFor="city">City: </label>
						</div>
						<div>
							<input
								type="text"
								name="city"
								id="city"
								value={city}
								onChange={handleCityChange}
							/>
						</div>
						{/* State */}
						<div>
							<label htmlFor="state">State: </label>
						</div>
						<div>
							<input
								type="text"
								name="state"
								id="state"
								value={state}
								onChange={handleStateChange}
							/>
						</div>
					</form>
				</div>
				<div className="col">
					<FormDataDisplay
						firstName={firstName}
						lastName={lastName}
						city={city}
						state={state}
					/>
				</div>
			</div>
		</>
	);
}

export default FormDataControlledComponents;
