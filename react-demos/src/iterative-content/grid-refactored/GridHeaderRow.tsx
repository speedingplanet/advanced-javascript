import React from 'react';
import { Country, GridColumn } from '../../demo-types';

function GridHeaderRow({ columns }: { columns: GridColumn<Country>[] }) {
	return (
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
	);
}

export default GridHeaderRow;
