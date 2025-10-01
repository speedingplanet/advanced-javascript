import React from 'react';
import GridBodyRow from './GridBodyRow';
import { Country, GridColumn } from '../../demo-types';

export interface GridBodyProps {
	countries: Country[];
	columns: GridColumn<Country>[];
}

function GridBody({ countries, columns }: GridBodyProps) {
	return (
		<div className="countries-grid-body">
			{countries.map((country) => (
				<GridBodyRow
					key={country.id}
					columns={columns}
					country={country}
				/>
			))}
		</div>
	);
}

export default GridBody;
