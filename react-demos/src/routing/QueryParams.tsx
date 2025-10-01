import React from 'react';
import { useSearchParams } from 'react-router-dom';

const QueryParams = () => {
	const [queryParams, setQueryParams] = useSearchParams();

	// Regular JavaScript, but we can't use this in JSX (no for iterators allowed)
	for (let entry of queryParams.entries()) {
		console.log(`Key: ${entry[0]} | Value: ${entry[1]}`);
	}

	// Array.from runs through the iterator, converting all values to
	// an array of arrays [[key, value], [key, value], ...]
	const paramsAsArray = Array.from(queryParams.entries());

	return (
		<>
			<div className="row">
				<header className="col">
					<h3>Query Parameters</h3>
				</header>
			</div>
			<div className="row">
				<div className="col">
					<p>
						We can access query parameters like{' '}
						<code>
							url?<em>city=Chicago&state=IL</em>
						</code>{' '}
						with the <code>useSearchParams</code> hook.
					</p>
					<p>The parameters passed in were</p>
					<ul>
						{paramsAsArray.map(([key, value], index) => (
							<li key={index}>
								{key}: {value}
							</li>
						))}
					</ul>
					{/* <button className="btn btn-primary" onClick={() => setQueryParams("a=b&c=d")}>Change params</button> */}
					<button
						className="btn btn-primary"
						onClick={() => setQueryParams({ a: 'two words', c: 'd' })}
					>
						Change params
					</button>
				</div>
			</div>
		</>
	);
};

export default QueryParams;
