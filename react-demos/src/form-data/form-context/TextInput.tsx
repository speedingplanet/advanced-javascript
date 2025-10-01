/*eslint @typescript-eslint/no-unused-vars: ["error", { "args": "after-used" }]*/
import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import { FormContext, FormState } from './FormWithContext';

/**
 *
 * @param {{
 * id?: string,
 * name: string,
 * value: string,
 * updateForm: React.ChangeEventHandler<HTMLInputElement>
 * }} props
 * @returns {JSX.Element}
 */

/**
 * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase#wrappingmirroring-a-html-element}
 */
interface TextInputProps extends React.ComponentPropsWithoutRef<'input'> {
	updateForm?: React.ChangeEventHandler<HTMLInputElement>;
}

// function TextInput({ id, name, value, updateForm, children, ...props }) {
function TextInput({ id, name, children, ...props }: TextInputProps) {
	let context = useContext(FormContext);

	let labelText = children || 'Label goes here';
	if (!id) {
		id = nanoid();
	}

	return (
		<>
			<div>
				<label htmlFor={id}>{labelText}</label>
			</div>
			<div>
				<input
					type="text"
					id={id}
					name={name}
					value={context?.state ? context.state[name as keyof FormState] : undefined}
					onChange={(event) => {
						context?.updater(event.target.name, event.target.value);
					}}
					{...props}
				/>
			</div>
		</>
	);
}

export default TextInput;
