import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import FormDataControlledComponents from './FormDataControlledComponents';
import FormDataUtilityHandler from './FormDataUtilityHandler';
import FormDataEventObject from './FormDataEventObject';
import FormDataSingleStateObject from './FormDataSingleStateObject';
import FormWithContext from './form-context/FormWithContext';
import './form-data.css';
import FormWithReducer from './form-context/FormWithReducer';

function FormDataManager() {
	return (
		<>
			<div className="row">
				<div className="col-3 form-data-manager">
					<ul className="list-unstyled">
						<li>
							<NavLink to="/form-data/controlled-components">Controlled Components</NavLink>
						</li>
						<li>
							<NavLink to="/form-data/utility-event-handler">
								Controlled Components with a utility event handler
							</NavLink>
						</li>
						<li>
							<NavLink to="/form-data/event-object">
								Uses only the event object to carry updates
							</NavLink>
						</li>
						<li>
							<NavLink to="/form-data/single-state-object">Single state object</NavLink>
						</li>
						<li>
							<NavLink to="/form-data/plain-reducer">Just a Reducer</NavLink>
						</li>
						<li>
							<NavLink to="/form-data/context-reducer">Context</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="controlled-components"
							element={<FormDataControlledComponents />}
						/>
						<Route
							path="utility-event-handler"
							element={<FormDataUtilityHandler />}
						/>
						<Route
							path="event-object"
							element={<FormDataEventObject />}
						/>
						<Route
							path="single-state-object"
							element={<FormDataSingleStateObject />}
						/>
						<Route
							path="context-reducer"
							element={<FormWithContext />}
						/>
						<Route
							path="plain-reducer"
							element={<FormWithReducer />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default FormDataManager;
