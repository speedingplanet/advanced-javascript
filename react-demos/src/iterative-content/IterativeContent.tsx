import React from 'react';

// Available through Vite, NOT standard JS
import { countries } from '../data/countries-table.json';

function IterativeContent() {
	let formatter = new Intl.NumberFormat();

	return (
		<section className="row">
			<div className="col">
				<h3>Countries ranked by population</h3>
				<ul>
					{countries.map((item, index, array) => {
						return (
							<li key={item.id}>
								{item.country}: {formatter.format(item.pop2022)} [id: {item.id}]
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default IterativeContent;
