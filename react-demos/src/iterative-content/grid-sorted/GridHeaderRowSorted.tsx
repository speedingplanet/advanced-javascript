import React from 'react';
import SortIndicator from './SortIndicator';
import { Country, GridColumn, SortConfig } from '../../demo-types';

interface GridHeaderRowProps {
	columns: GridColumn<Country>[];
	onHeaderClick: (field: keyof Country) => void;
	sortConfig: SortConfig<Country>;
}

function GridHeaderRow({ columns, onHeaderClick, sortConfig }: GridHeaderRowProps) {
	return (
		<div className="countries-grid-head">
			{columns.map((column) => (
				<div
					className="countries-grid-header"
					key={column.field}
					onClick={() => onHeaderClick(column.field)}
				>
					{column.label}{' '}
					<SortIndicator
						sortConfig={sortConfig}
						field={column.field}
					/>
				</div>
			))}
		</div>
	);
}

export default GridHeaderRow;
