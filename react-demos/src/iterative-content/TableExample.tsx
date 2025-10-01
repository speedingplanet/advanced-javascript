import React from 'react';

import { countries } from '../data/countries-table.json';

function TableExample() {
	return (
		<div style={{width: "100%"}}>
			<table className="table table-hover table-striped">
				<thead>
					<tr>
						<th>Country</th>
						<th>2022 Population</th>
						<th>Size (km^2)</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((c) => (
						<tr key={c.id}>
							<td>{c.country}</td>
							<td>{c.pop2022}</td>
							<td>{c.area}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TableExample;
