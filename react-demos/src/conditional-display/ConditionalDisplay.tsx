import React, { useState } from 'react';
import type * as CSS from 'csstype';
import './ConditionalDisplay.css';

/*
- HTML hidden attribute / JS property
- CSS display property
- CSS visibility property (opacity is similar)
- Programmatically show or hide the component

*/

function ConditionalDisplay() {
	let [showBox1, setShowBox1] = useState(false);
	let [showBox2, setShowBox2] = useState('block');
	let [showBox3, setShowBox3] = useState<CSS.Property.Visibility>('visible');
	let [showBox4, setShowBox4] = useState(false);

	function handleToggleBox2() {
		if (showBox2 === 'block') {
			setShowBox2('none');
		} else {
			setShowBox2('block');
		}
	}

	return (
		<section className="row">
			<div className="col">
				<ul>
					<li
						className="clickable"
						onClick={() => setShowBox1(!showBox1)}
					>
						Toggle Box 1 (hidden attribute)
					</li>
					<li
						className="clickable"
						onClick={handleToggleBox2}
					>
						Toggle Box 2 (CSS display)
					</li>
					<li
						className="clickable"
						onClick={() => setShowBox3(showBox3 === 'visible' ? 'hidden' : 'visible')}
					>
						Toggle Box 3 (CSS visibility)
					</li>
					<li
						className="clickable"
						onClick={() => setShowBox4(!showBox4)}
					>
						Toggle Box 4 (JSX ternary)
					</li>
				</ul>
			</div>
			<div className="col">
				<div className="cd-container">
					<div
						className="cd-box"
						hidden={showBox1}
					>
						One
					</div>
					<div
						className="cd-box"
						style={{ display: showBox2 }}
					>
						Two
					</div>
					<div
						className="cd-box"
						style={{ visibility: showBox3 }}
					>
						Three
					</div>
					{showBox4 ? <div className="cd-box">Four</div> : ''}
				</div>
			</div>
		</section>
	);
}

export default ConditionalDisplay;
