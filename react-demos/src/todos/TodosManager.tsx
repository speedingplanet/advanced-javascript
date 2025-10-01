import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import TodosContainer from './plain/TodosContainer';
import TodosReducerContainer from './reducer/TodosReducerContainer';
import TodosContextContainer from './context-reducer/TodosContextContainer';
import TodosReduxContainer from './redux/TodosReduxContainer';

const TodosManager = () => {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<NavLink to="plain">Plain</NavLink>
						</li>
						<li>
							<NavLink to="reducer">Reducer</NavLink>
						</li>
						<li>
							<NavLink to="context-reducer">Reducer with Context</NavLink>
						</li>
						<li>
							<NavLink to="redux">Using Redux</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="plain"
							element={<TodosContainer />}
						/>
						<Route
							path="reducer"
							element={<TodosReducerContainer />}
						/>
						<Route
							path="context-reducer"
							element={<TodosContextContainer />}
						/>
						<Route
							path="redux"
							element={<TodosReduxContainer />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
};

export default TodosManager;
