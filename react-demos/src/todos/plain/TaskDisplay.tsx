import React, { useState } from 'react';
import './TaskDisplay.css';
import { Task } from '../tasks';

export interface TaskDisplayProps {
	task: Task;
	onChangeTask: (task: Task) => void;
	onDeleteTask: (taskId: number) => void;
}

export default function TaskDisplay({ task, onChangeTask, onDeleteTask }: TaskDisplayProps) {
	const [isEditing, setIsEditing] = useState(false);

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
						onChangeTask({
							...task,
							text: e.target.value,
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
						onChangeTask({
							...task,
							done: e.target.checked,
						});
					}}
				/>
				{taskContent}
			</div>
			{actionButton}

			<div>
				<button
					className="btn btn-danger btn-small btn-really-small"
					onClick={() => onDeleteTask(task.id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
