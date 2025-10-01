import React, { useState, useMemo } from 'react';

export default function Memoization() {
	const [matters, setMatters] = useState('');
	const [insignificant, setInsignificant] = useState('');

	const displayMatters = useMemo(() => {
		console.log(`The important value is now ${matters}`);
		return matters;
	}, [matters]);

	return (
		<div>
			<form>
				<div className="form-group">
					<label htmlFor="matters">This matters:</label>
					<input
						type="text"
						id="matters"
						value={displayMatters}
						onChange={(e) => setMatters(e.target.value)}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="insignificant">This doesn't matter:</label>
					<input
						type="text"
						id="insignificant"
						value={insignificant}
						onChange={(e) => setInsignificant(e.target.value)}
						className="form-control"
					/>
				</div>
			</form>
			<div>
				<ul>
					<li>Important value: {matters}</li>
					<li>Less important value: {insignificant}</li>
				</ul>
			</div>
		</div>
	);
}
