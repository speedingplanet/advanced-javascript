// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

function withContext(WrappedComponent, Context, asObject = false) {
	class WithContext extends React.Component {
		render() {
			// If you wanted to filter out some HOC-specific props
			// const { customProp, ...locProps } = this.props;

			if (asObject) {
				return (
					<WrappedComponent
						{...this.props}
						context={this.context}
					/>
				);
			}
			return (
				<WrappedComponent
					{...this.props}
					{...this.context}
				/>
			);
		}
	}

	// Found a use case for contextType
	WithContext.contextType = Context;
	WithContext.displayName = `WithContext${getDisplayName(WrappedComponent)}`;

	return WithContext;
}

function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function DisplayName({ name }) {
	return <h4>Hello, {name}!</h4>;
}

const HigherOrderComponentContext = React.createContext({ name: 'John' });

const DisplayNameWithContext = withContext(DisplayName, HigherOrderComponentContext);

export default function HigherOrderComponent() {
	return (
		<HigherOrderComponentContext.Provider value={{ name: 'Francis' }}>
			<div>
				<ul>
					<li>
						Regular DisplayName: <DisplayName name="Bob" />
					</li>
					<li>
						DisplayNameWithContext: <DisplayNameWithContext />
					</li>
				</ul>
			</div>
		</HigherOrderComponentContext.Provider>
	);
}
