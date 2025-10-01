// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';

function ChildComponent() {
	return <h3>Child component</h3>;
}

function WithPropsComponent(props: { name: string }) {
	return <h3>Hello, {props.name}</h3>;
}

function DefaultComponent() {
	return <h4>Default Component</h4>;
}
export default function DynamicComponents() {
	const [customComponent, setCustomComponent] = useState('');

	// let DisplayComponent = customComponent || DefaultComponent;
	const components = {
		ChildComponent,
		WithPropsComponent,
	};

	let DisplayComponent = components[customComponent] || DefaultComponent;
	return (
		<div className="row">
			<div className="col">
				<ul>
					<li onClick={() => setCustomComponent('ChildComponent')}>'ChildComponent'</li>
					<li onClick={() => setCustomComponent('WithPropsComponent')}>
						WithPropsComponent (no props)
					</li>
					<li onClick={() => setCustomComponent(ChildComponent)}>ChildComponent</li>
				</ul>
			</div>
			<div className="col">
				<DisplayComponent />
			</div>
		</div>
	);
}
