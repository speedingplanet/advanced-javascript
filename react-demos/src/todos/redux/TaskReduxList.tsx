import React from 'react';
import TaskDisplay from './TaskReduxDisplay';
import '../plain/TaskDisplay.css';
import { useDispatch, useSelector } from 'react-redux';
import { orderBy } from 'lodash';
import { RootState } from './todos-store';
import { sortTodos } from './ui-slice';

export default function TaskList() {
	const tasks = useSelector((state: RootState) => state.todos);
	const sortConfig = useSelector((state: RootState) => state.ui);

	const dispatch = useDispatch();

	let displayTasks = tasks;

	if (sortConfig.sortColumn !== null) {
		displayTasks = orderBy(tasks, sortConfig.sortColumn, sortConfig.sortDirection!);
	}

	return (
		<>
			<h4>Tasks</h4>
			<ul className="list-inline">
				<li className="list-inline-item">
					<button
						className="btn btn-primary btn-small btn-really-small"
						onClick={() => dispatch(sortTodos('text'))}
					>
						Sort text
					</button>
				</li>
				<li className="list-inline-item">
					<button
						className="btn btn-primary btn-small btn-really-small"
						onClick={() => dispatch(sortTodos('done'))}
					>
						Sort done
					</button>
				</li>
				<li className="list-inline-item">
					<button
						className="btn btn-primary btn-small btn-really-small"
						onClick={() => dispatch(sortTodos(null))}
					>
						Clear sort
					</button>
				</li>
			</ul>
			<ul>
				{displayTasks.map((task) => (
					<li key={task.id}>
						<TaskDisplay task={task} />
					</li>
				))}
			</ul>
		</>
	);
}
