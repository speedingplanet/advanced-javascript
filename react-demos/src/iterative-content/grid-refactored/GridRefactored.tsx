import React from 'react';
import { countries } from '../../data/countries-table.json';
import '../GridExample.css';
import GridHeaderRow from './GridHeaderRow';
import GridBody from './GridBody';
import { Country, GridColumn, CSSProperties } from '../../demo-types';

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

function GridRefactored() {
	// Due to over-aggressive CSS type checking
	// See here: https://github.com/frenic/csstype/issues/63#issuecomment-982133385
	const columnsToCSS: CSSProperties = {
		'--columns': columns.length,
	};

	return (
		<section style={columnsToCSS}>
			<h3>Countries and their population (refactored)</h3>
			<div className="countries-grid">
				<GridHeaderRow columns={columns} />
				<GridBody
					columns={columns}
					countries={countries}
				/>
			</div>
		</section>
	);
}

export default GridRefactored;
