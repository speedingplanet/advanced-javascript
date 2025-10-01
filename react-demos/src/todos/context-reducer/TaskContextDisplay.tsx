import React, { useContext, useState } from 'react';
import '../plain/TaskDisplay.css';
import { DispatchContext } from './TodosContextContainer';

export interface Task {
	id: number;
	text: string;
	done: boolean;
}

export interface TaskDisplayProps {
	task: Task;
}

export default function TaskDisplay({ task }: TaskDisplayProps) {
	const [isEditing, setIsEditing] = useState(false);
	const dispatch = useContext(DispatchContext);

	if (dispatch === null) throw Error('dispatch is null?!');

	// Either the label or the form field
	let taskContent;

	// Edit or Save
	let actionButton;

	if (isEditing) {
		taskContent = (
			<div className="me-2">
				<input
					type="text"
					value={task.text}
					onChange={(e) => {
						dispatch({
							type: 'todos/change',
							task: {
								...task,
								text: e.target.value,
							},
						});
					}}
				/>
			</div>
		);
		actionButton = (
			<div>
				<button
					className="btn btn-secondary btn-small btn-really-small"
					onClick={() => setIsEditing(false)}
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
						dispatch({
							type: 'todos/change',
							task: {
								...task,
								done: e.target.checked,
							},
						});
					}}
				/>
				{taskContent}
			</div>
			{actionButton}

			<div>
				<button
					className="btn btn-danger btn-small btn-really-small"
					onClick={() => dispatch({ type: 'todos/delete', taskId: task.id })}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
