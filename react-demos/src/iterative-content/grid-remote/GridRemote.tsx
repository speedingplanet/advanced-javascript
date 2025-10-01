import React, { useState, useEffect } from 'react';
import { orderBy } from 'lodash';
import '../GridExample.css';
import GridHeaderRow from '../grid-sorted/GridHeaderRowSorted';
import GridBody from '../grid-sorted/GridBodySorted';
import { Country, CSSProperties, GridColumn, SortConfig, SortDirection } from '../../demo-types';

let columns: GridColumn<Country>[] = [
	{
		field: 'country',
		label: 'Country',
	},
	{
		field: 'pop2022',
		label: 'Population (2022)',
	},
	{
		field: 'area',
		label: 'Size (km^2)',
	},
];

let initialSortConfig: SortConfig<Country> = {
	sortField: '',
	sortDirection: 'asc',
};

function GridRemote() {
	let [sortConfig, setSortConfig] = useState(initialSortConfig);
	let [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/countries')
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(`Bad response: ${response.status}`);
				}
			})
			.then((countries) => {
				setCountries(countries);
			})
			.catch((error) => {
				console.error('Failed to fetch countries:', error);
			});
	}, []);

	function handleHeaderClick(sortField: keyof Country) {
		let sortDirection: SortDirection = 'asc';
		if (sortConfig.sortField === sortField && sortConfig.sortDirection === 'asc') {
			sortDirection = 'desc';
		}

		let nextSortConfig: SortConfig<Country> = {
			sortField,
			sortDirection,
		};

		setSortConfig(nextSortConfig);
	}

	if (countries.length > 0) {
		let sortedCountries = orderBy(countries, sortConfig.sortField, sortConfig.sortDirection);

		// Due to over-aggressive CSS type checking
		// See here: https://github.com/frenic/csstype/issues/63#issuecomment-982133385
		const columnsToCSS: CSSProperties = {
			'--columns': columns.length,
		};

		return (
			<section style={columnsToCSS}>
				<h3>Countries Grid with remote data</h3>
				<div className="countries-grid">
					<GridHeaderRow
						columns={columns}
						onHeaderClick={handleHeaderClick}
						sortConfig={sortConfig}
					/>
					<GridBody
						columns={columns}
						countries={sortedCountries}
					/>
				</div>
			</section>
		);
	} else {
		return <div>Waiting for countries to load</div>;
	}
}

export default GridRemote;
