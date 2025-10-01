import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Promises from './Promises';
import AsyncAwait from './AsyncAwait';
import ReactQuery from './ReactQuery';

function AsyncManager() {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<NavLink to="/async-demos/promises">Promises</NavLink>
						</li>
						<li>
							<NavLink to="/async-demos/async-await">Async-await</NavLink>
						</li>
						<li>
							<NavLink to="/async-demos/react-query">React Query</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="promises"
							element={<Promises />}
						/>
						<Route
							path="async-await"
							element={<AsyncAwait />}
						/>
						<Route
							path="react-query"
							element={<ReactQuery />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default AsyncManager;
