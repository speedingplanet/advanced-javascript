import React, { useState } from 'react';
import './VisibilityDemo.css';

function VisibilityDemo() {
	const [domPresent, setDOMPresent] = useState(true);
	// possible values are 'visible', 'hidden', 'collapse'
	const [visible, setVisible] = useState<'visible' | 'hidden' | 'collapse'>('visible');
	const [displayValue, setDisplayValue] = useState('block');
	const [opaque, setOpacity] = useState(1.0);
	const [hidden, setHidden] = useState(false);

	return (
		<>
			<div className="row">
				<div className="col">
					<h3>In the DOM</h3>
					<div className="container-box">
						{domPresent ? <Box data-testid="DOM" /> : null}
						{/* {element} */}
					</div>
					<button
						className="btn btn-sm btn-primary"
						onClick={() => setDOMPresent(!domPresent)}
					>
						Toggle DOM
					</button>
				</div>
				<div className="col">
					<h3>Visibility</h3>
					<div className="container-box">
						<Box
							style={{ visibility: visible }}
							data-testid="visibility"
						/>
					</div>
					<button
						className="btn btn-sm btn-primary"
						onClick={() => setVisible(visible === 'visible' ? 'hidden' : 'visible')}
					>
						Toggle Visibility
					</button>
				</div>
				<div className="col">
					<h3>Display</h3>
					<div className="container-box">
						<Box
							style={{ display: displayValue }}
							data-testid="display"
						/>
					</div>
					<button
						className="btn btn-sm btn-primary"
						onClick={() => setDisplayValue(displayValue === 'block' ? 'none' : 'block')}
					>
						Toggle Display
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<h3>Opacity</h3>
					<div className="container-box">
						<Box
							style={{ opacity: opaque }}
							data-testid="opacity"
						/>
					</div>
					<button
						className="btn btn-sm btn-primary"
						onClick={() => setOpacity(opaque === 1 ? 0 : 1)}
					>
						Toggle Opacity
					</button>
				</div>
				<div className="col">
					<h3>Hidden</h3>
					<div className="container-box">
						<Box
							hidden={hidden}
							data-testid="hidden"
						/>
					</div>
					<button
						className="btn btn-sm btn-primary"
						onClick={() => setHidden(!hidden)}
					>
						Toggle Hidden
					</button>
				</div>
			</div>
		</>
	);
}

function Box(props: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<div
			className="visibility-box"
			{...props}
		></div>
	);
}

export default VisibilityDemo;
