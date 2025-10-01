import React from 'react';
import { useParams } from 'react-router-dom';

const PathParams = () => {
	const { userName } = useParams();

	return (
		<>
			<div className="row">
				<header className="col">
					<h3>Path Parameters</h3>
				</header>
			</div>
			<div className="row">
				<div className="col">
					<p>
						We can access path parameters with the <code>useParams</code> hook.
					</p>
					<p>
						The parameter value passed in is <em>{userName}</em>
					</p>
				</div>
			</div>
		</>
	);
};

export default PathParams;
