// import MyCustomChildComponent from './PropsChild';
// Regular export and rename
// import {PropsChild as MyCustomChildComponent} from './PropsChild';

// import PropsChild from './PropsChild';
import {PropsChildDestructured as PropsChild} from './PropsChild';

function PropsParent() {
	return (
		<div>
			<p>Passing the name "John" to the child component.</p>
			<div>
				<PropsChild
					firstName="John"
					lastName="Paxton"
				/>
			</div>
		</div>
	);
}

export default PropsParent;
