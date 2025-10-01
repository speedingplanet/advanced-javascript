import React from 'react';
import { countries } from '../data/countries-table.json';
import './GridExample.css';
import { Country, CSSProperties, GridColumn } from '../demo-types';

let columns: GridColumn<Country>[] = [
	{
		field: 'country',
		label: 'Country Name',
	},
	{
		field: 'pop2022',
		label: 'Population (2022)',
	},
	{
		field: 'area',
		label: 'Size (km^2)',
	},
	{
		field: 'density',
		label: 'Population density'
	}
];

function GridExample() {
	// Due to over-aggressive CSS type checking
	// See here: https://github.com/frenic/csstype/issues/63#issuecomment-982133385
	const columnsToCSS: CSSProperties = {
		'--columns': columns.length,
	};

	return (
		<section style={columnsToCSS}>
			<h3>Countries and their population</h3>
			<div className="countries-grid">
				<div className="countries-grid-head">
					{columns.map((column) => (
						<div
							className="countries-grid-header"
							key={column.field}
						>
							{column.label}
						</div>
					))}
				</div>
				<div className="countries-grid-body">
					{countries.map((country) =>
						columns.map((column) => <div key={country.id}>{country[column.field]}</div>)
					)}
				</div>
			</div>
		</section>
	);
}

export default GridExample;
