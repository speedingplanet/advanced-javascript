import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProgrammaticNavigation = () => {
	const go = useNavigate();

	return (
		<>
			<div className="row">
				<header className="col">
					<h3>Programmatic Navigation</h3>
				</header>
			</div>
			<div className="row">
				<div className="col">
					<p>
						Click on any of these buttons to navigate with code rather than{' '}
						<code>&lt;NavLink /&gt;</code> or <code>&lt;Link /&gt;</code>
					</p>
					<div className="d-flex justify-content-between">
						<div>
							<button
								onClick={() => go('../inline-element')}
								className="btn btn-success"
							>
								In-line element
							</button>
						</div>
						<div>
							<button
								onClick={() => go('../path-params/mcp')}
								className="btn btn-warning"
							>
								Path Params
							</button>
						</div>
						<div>
							<button
								onClick={() => go('../../event-handling')}
								className="btn btn-info"
							>
								Event Handling
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProgrammaticNavigation;
