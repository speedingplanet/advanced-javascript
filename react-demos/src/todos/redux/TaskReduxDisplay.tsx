import React, { useState } from 'react';
import '../plain/TaskDisplay.css';
import { useDispatch } from 'react-redux';
import { changeTodo, deleteTodo } from './todos-slice';
import { Task } from '../tasks';

export default function TaskDisplay({ task }: { task: Task }) {
	const [isEditing, setIsEditing] = useState(false);
	const [localTaskText, setLocalTaskText] = useState(task.text);
	const dispatch = useDispatch();

	// Either the label or the form field
	let taskContent;

	// Edit or Save
	let actionButton;

	if (isEditing) {
		taskContent = (
			<div className="me-2">
				<input
					type="text"
					value={localTaskText}
					onChange={(e) => {
						setLocalTaskText(e.target.value);
					}}
				/>
			</div>
		);
		actionButton = (
			<div>
				<button
					className="btn btn-secondary btn-small btn-really-small"
					onClick={() => {
						setIsEditing(false);
						dispatch(changeTodo({ ...task, text: localTaskText }));
					}}
				>
					Save
				</button>
			</div>
		);
	} else {
		taskContent = (
			<div>
				<label
					htmlFor={`task-${task.id}`}
					className="form-check-label"
				>
					{task.text}
				</label>
			</div>
		);
		actionButton = (
			<div>
				<button
					className="btn btn-info btn-small btn-really-small"
					onClick={() => setIsEditing(true)}
				>
					Edit
				</button>
			</div>
		);
	}
	return (
		<div className="d-flex mb-1">
			<div className="form-check me-1 align-self-center">
				<input
					type="checkbox"
					id={`task-${task.id}`}
					className="form-check-input"
					checked={task.done}
					onChange={(e) => {
						dispatch(
							changeTodo({
								...task,
								done: e.target.checked,
							})
						);
					}}
				/>
				{taskContent}
			</div>
			{actionButton}

			<div>
				<button
					className="btn btn-danger btn-small btn-really-small"
					onClick={() => dispatch(deleteTodo(task.id))}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
