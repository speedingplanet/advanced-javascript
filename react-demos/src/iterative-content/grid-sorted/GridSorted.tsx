import React, { useState } from 'react';
import { orderBy } from 'lodash';
import { countries } from '../../data/countries-table.json';
import '../GridExample.css';
import GridHeaderRow from './GridHeaderRowSorted';
import GridBody from './GridBodySorted';
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

function GridSorted() {
	let [sortConfig, setSortConfig] = useState(initialSortConfig);

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

	let sortedCountries = orderBy(countries, sortConfig.sortField, sortConfig.sortDirection);

	// Due to over-aggressive CSS type checking
	// See here: https://github.com/frenic/csstype/issues/63#issuecomment-982133385
	const columnsToCSS: CSSProperties = {
		'--columns': columns.length,
	};

	return (
		<section style={columnsToCSS}>
			<h3>Countries Grid with sorting</h3>
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
}

export default GridSorted;
