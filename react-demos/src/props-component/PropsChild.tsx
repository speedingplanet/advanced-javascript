// Properties interfaces are usually [Component Name]Props
interface PropsChildProps {
	firstName: string;
	lastName: string;
}

export default function PropsChild(props: PropsChildProps) {
	// Old-style concatenation
	// console.log('Hello, ' + firstName);

	// New style using backticks and variable interpolation
	// console.log(`Hello, ${firstName}`);

	// JSX with React
	return (
		<p>
			Hello, {props.firstName} {props.lastName}
		</p>
	);
}

export function PropsChildDestructured({ firstName, lastName }: PropsChildProps) {
	return (
		<p>
			Hello, {firstName} {lastName}
		</p>
	);
}
