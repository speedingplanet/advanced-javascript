import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import EffectHook from './effect-hook/EffectHook';
import HigherOrderComponent from './higher-order-component/HigherOrderComponent';
import Memoization from './memo-demo/Memoization';
import DynamicComponents from './dynamic-components/DynamicComponents';
import ReduxCounter from './redux-counter/ReduxCounter';
import ReduxCounterBP from './redux-counter-best/ReduxContainer';
import ReduxToolkitCounter from './redux-counter-tk/ReduxContainer';
import VisibilityDemo from './visibility-tests/VisibilityDemo';
import BasicComponent from './testing/BasicComponent';
import FormDataManager from './form-data/FormDataManager';
import IterativeContentManager from './iterative-content/IterativeContentManager';
import AsyncManager from './async-demos/AsyncManager';
import PropsChildren from './PropsChildren';

import './App.css';
import EventHandling from './event-handling/EventHandling';
import ConditionalDisplay from './conditional-display/ConditionalDisplay';
import TodosManager from './todos/TodosManager';
import RoutingManager from './routing/RoutingManager';
import PropsParent from './props-component/PropsParent';

function App() {
	return (
		<main className="container">
			<header className="row">
				<div className="col">
					<h1>React Demos</h1>
					<hr />
				</div>
			</header>
			<BrowserRouter>
				<div className="row">
					<div className="col-3">
						<ul className="list-unstyled">
							<li>
								<NavLink to="props-component">Props Component</NavLink>
							</li>
							<li>
								<NavLink to="event-handling">Event Handling</NavLink>
							</li>
							<li>
								<NavLink to="conditional-display">Conditional Display</NavLink>
							</li>
							<li>
								<NavLink to="visibility-demo">Visbility Demo</NavLink>
							</li>
							<li>
								<NavLink to="testable-component">Testable component</NavLink>
							</li>
							<li>
								<NavLink to="form-data">Form Data examples</NavLink>
							</li>
							<li>
								<NavLink to="iterative-content">Iterative content</NavLink>
							</li>
							<li>
								<NavLink to="routing">Routing</NavLink>
							</li>
							<li>
								<NavLink to="async-demos">Async Demos</NavLink>
							</li>
							<li>
								<NavLink to="props-children">
									<code>children</code> property
								</NavLink>
							</li>
							<li>
								<NavLink to="effect-hook">Effect Hook</NavLink>
							</li>
							<li>
								<NavLink to="higher-order-component">Higher Order Component</NavLink>
							</li>
							<li>
								<NavLink to="memoization">Memoization</NavLink>
							</li>
							<li>
								<NavLink to="dynamic-components">DynamicComponents</NavLink>
							</li>
							<li>
								<NavLink to="redux-counter">Redux Counter</NavLink>
							</li>
							<li>
								<NavLink to="redux-counter-best-practices">Redux Counter (best practices)</NavLink>
							</li>
							<li>
								<NavLink to="redux-toolkit-counter">Redux Counter (using the toolkit)</NavLink>
							</li>
							<li>
								<NavLink to="todos">To-dos (various implementations)</NavLink>
							</li>
						</ul>
					</div>
					<div className="col">
						<Routes>
							<Route
								path="/props-component"
								element={<PropsParent />}
							/>
							<Route
								path="/event-handling"
								element={<EventHandling />}
							/>
							<Route
								path="/conditional-display"
								element={<ConditionalDisplay />}
							/>
							<Route
								path="/form-data/*"
								element={<FormDataManager />}
							/>
							<Route
								path="/todos/*"
								element={<TodosManager />}
							/>
							<Route
								path="/iterative-content/*"
								element={<IterativeContentManager />}
							/>
							<Route
								path="/routing/*"
								element={<RoutingManager />}
							/>
							<Route
								path="/async-demos/*"
								element={<AsyncManager />}
							/>
							<Route
								path="/props-children"
								element={<PropsChildren />}
							/>
							<Route
								path="/effect-hook"
								element={<EffectHook />}
							/>
							<Route
								path="/higher-order-component"
								element={<HigherOrderComponent />}
							/>
							<Route
								path="/memoization"
								element={<Memoization />}
							/>
							<Route
								path="/dynamic-components"
								element={<DynamicComponents />}
							/>
							<Route
								path="/redux-counter"
								element={<ReduxCounter />}
							/>
							<Route
								path="/redux-counter-best-practices"
								element={<ReduxCounterBP />}
							/>
							<Route
								path="/redux-toolkit-counter"
								element={<ReduxToolkitCounter />}
							/>
							<Route
								path="/testable-component"
								element={<BasicComponent />}
							/>
							<Route
								path="/visibility-demo"
								element={<VisibilityDemo />}
							/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</main>
	);
}

export default App;
