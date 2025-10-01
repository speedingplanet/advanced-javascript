import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import RouteToComponent from './RouteToComponent';
import PathParams from './PathParams';
import QueryParams from './QueryParams';
import ProgrammaticNavigation from './ProgrammaticNavigation';

const RoutingManager = () => {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<NavLink to="inline-element">In-line element</NavLink>
						</li>
						<li>
							<NavLink to="component">Component</NavLink>
						</li>
						<li>
							<NavLink to="path-params/pax">Path params</NavLink>
						</li>
						<li>
							<NavLink to="query-params?city=New York&state=NY">Query Params</NavLink>
						</li>
						<li>
							<NavLink to="programmatic-navigation">Programmatic Navigation</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="inline-element"
							element={<p>Inline JSX element</p>}
						/>
						<Route
							path="component"
							element={<RouteToComponent />}
						/>
						<Route
							path="path-params/:userName"
							element={<PathParams />}
						/>
						<Route
							path="query-params"
							element={<QueryParams />}
						/>
						<Route
							path="programmatic-navigation"
							element={<ProgrammaticNavigation />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
};

export default RoutingManager;
