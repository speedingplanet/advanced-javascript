import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import InstructorHome from './instructor/InstructorHome';
import StudentHome from './student/StudentHome';

function App() {
	return (
		<main className="p-1">
			<BrowserRouter>
				<nav className="mt-2">
					<ul className="list-inline">
						<li className="list-inline-item">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="list-inline-item">
							<NavLink to="/instructor">Instructor Home</NavLink>
						</li>
						<li className="list-inline-item">
							<NavLink to="/student">Student Home</NavLink>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/instructor/*"
						element={<InstructorHome />}
					/>
					<Route
						path="/student/*"
						element={<StudentHome />}
					/>
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;
