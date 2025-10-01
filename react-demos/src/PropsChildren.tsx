import React from 'react';

function PropsChildren() {
	return (
		<div>
			<h3>Children as props</h3>
			<p>
				Accessing the <code>children</code> property
			</p>
			<h4>Wrapping elements</h4>
			<WrapsElements>
				<p>One paragraph</p>
				<p>Two paragraphs</p>
			</WrapsElements>
			<h4>Wrapping text</h4>
			<WrapsText>Be curious, not judgemental.</WrapsText>
		</div>
	);
}

function WrapsElements({ children }: React.PropsWithChildren) {
	return (
		<div>
			<p>
				This component expects <code>children</code> to be elements
			</p>
			{children}
		</div>
	);
}

function WrapsText({ children }: React.PropsWithChildren) {
	return (
		<div>
			<p>
				This component expects <code>children</code> to be text
			</p>
			<p>
				<code>children:</code>
				{children}
			</p>
		</div>
	);
}

export default PropsChildren;
