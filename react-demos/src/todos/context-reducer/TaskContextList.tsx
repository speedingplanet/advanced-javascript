import React, { useContext } from 'react';
import TaskDisplay from './TaskContextDisplay';
import { TasksContext } from './TodosContextContainer';

export default function TaskList() {
	let tasks = useContext(TasksContext);

	return (
		<>
			<h4>Tasks</h4>
			<ul>
				{tasks!.map((task) => (
					<li key={task.id}>
						<TaskDisplay task={task} />
					</li>
				))}
			</ul>
		</>
	);
}
