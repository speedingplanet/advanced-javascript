import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import IterativeContent from './IterativeContent';
import GridExample from './GridExample';
import GridRefactored from './grid-refactored/GridRefactored';
import GridSorted from './grid-sorted/GridSorted';
import GridRemote from './grid-remote/GridRemote';
import TableExample from './TableExample';

function IterativeContentManager() {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<NavLink to="/iterative-content/minimal-example">Minimal example</NavLink>
						</li>
						<li>
							<NavLink to="/iterative-content/table-example">Table example</NavLink>
						</li>
						<li>
							<NavLink to="/iterative-content/grid-example">Grid example</NavLink>
						</li>
						<li>
							<NavLink to="/iterative-content/grid-refactored">Grid example refactored</NavLink>
						</li>
						<li>
							<NavLink to="/iterative-content/grid-sorted">Grid with sorting</NavLink>
						</li>
						<li>
							<NavLink to="/iterative-content/grid-remote">Grid with remote data</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="minimal-example"
							element={<IterativeContent />}
						/>
						<Route
							path="table-example"
							element={<TableExample />}
						/>
						<Route
							path="grid-example"
							element={<GridExample />}
						/>
						<Route
							path="grid-refactored"
							element={<GridRefactored />}
						/>
						<Route
							path="grid-sorted"
							element={<GridSorted />}
						/>
						<Route
							path="grid-remote"
							element={<GridRemote />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default IterativeContentManager;
