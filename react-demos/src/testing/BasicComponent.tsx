import React, { useState } from 'react';
import classes from './BasicComponent.module.css';

function BasicComponent() {
	// Part 1: Have a state variable
	const [favorite, setFavorite] = useState('');

	// Part 2: An event handler that updates state
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function handleFavorite(event: React.ChangeEvent<HTMLInputElement>) {
		setFavorite(event.target.value);
	}

	return (
		<div>
			<div>
				<label htmlFor="favorite-fruit">Add your favorite fruit:</label>
				<input
					type="text"
					name="favFruit"
					id="favorite-fruit"
					// Part 3: Form field calls the event handler whenever its value changes
					onChange={(event) => {
						setFavorite(event.target.value);
					}}
					// Part 4: The value displayed is the value from state
					value={favorite}
				/>
			</div>
			<ul>
				<li>Apples</li>
				<li className={classes.bananas}>Bananas</li>
				<li>Peaches</li>
				<li data-testid="oranges">Oranges</li>
				<li>{favorite}</li>
			</ul>
		</div>
	);
}

export default BasicComponent;
