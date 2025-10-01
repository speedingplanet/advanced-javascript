import React, { useEffect, useState } from 'react';
import { Country } from '../demo-types';

function Promises() {
	const [countries, setCountries] = useState<Country[]>([]);

	// One-time data request
	useEffect(() => {
		let url = 'http://localhost:8000/countries';
		// fetch() returns a Promise
		fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(`Bad response: ${response.status}`);
				}
			})
			.then((results) => {
				console.log('Countries array:', results);
				setCountries(results);
			})
			.catch((error) => {
				console.error('promises: Could not fetch data:', error);
			});
	}, []);

	return (
		<div className="row">
			<div className="col">
				<h3>Async with promises</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Country</th>
							<th>Population</th>
						</tr>
					</thead>
					<tbody>
						{countries.map((country) => (
							<tr key={country.id}>
								<td>{country.country}</td>
								<td>{country.pop2022}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Promises;
