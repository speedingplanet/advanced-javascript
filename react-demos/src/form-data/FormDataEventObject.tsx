import React, { useState } from 'react';
import FormDataDisplay from './FormDataDisplay';

function FormDataEventObject() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');

	function handleFormUpdate(event: React.ChangeEvent<HTMLInputElement>) {
		let field = event.target.name;
		let value = event.target.value;

		switch (field) {
			case 'firstName':
				setFirstName(value);
				break;
			case 'lastName':
				setLastName(value);
				break;
			case 'city':
				setCity(value);
				break;
			case 'state':
				setState(value);
				break;
		}
	}

	return (
		<>
			<h3>Event Object</h3>
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
								name="firstName"
								id="first-name"
								value={firstName}
								onChange={handleFormUpdate}
							/>
						</div>
						{/* Last Name */}
						<div>
							<label htmlFor="last-name">Last Name: </label>
						</div>
						<div>
							<input
								type="text"
								name="lastName"
								id="last-name"
								value={lastName}
								onChange={handleFormUpdate}
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
								onChange={handleFormUpdate}
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
								onChange={handleFormUpdate}
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

export default FormDataEventObject;
