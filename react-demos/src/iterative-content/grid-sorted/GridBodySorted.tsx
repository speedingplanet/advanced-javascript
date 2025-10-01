import React from 'react';
import GridBodyRow from './GridBodyRowSorted';
import { GridBodyProps } from '../grid-refactored/GridBody';

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
