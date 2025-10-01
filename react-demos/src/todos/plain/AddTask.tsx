import React, { useState } from 'react';

interface AddTaskProps {
	onAddTask: (text: string) => void;
}

export default function AddTask({ onAddTask }: AddTaskProps) {
	const [text, setText] = useState('');
	return (
		<div className="row mb-4">
			<div className="col">
				<input
					placeholder="Add task"
					className="form-control"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="col">
				<button
					className="btn btn-primary btn-small"
					onClick={() => {
						onAddTask(text);
						setText('');
					}}
				>
					Add
				</button>
			</div>
		</div>
	);
}
