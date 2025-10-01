import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { Task } from '../tasks';

let nextId = 4;
const initialTasks: Array<Task> = [
	{ id: 1, text: 'Groceries', done: false },
	{ id: 2, text: 'Change oil', done: true },
	{ id: 3, text: 'Clean kitchen table', done: false },
];

const TodosContainer = () => {
	const [tasks, setTasks] = useState(initialTasks);

	const handleAddTask = (text: string) => {
		setTasks([
			...tasks,
			{
				id: nextId++,
				text: text,
				done: false,
			},
		]);
	};

	const handleChangeTask = (task: Task) => {
		setTasks(
			tasks.map((t) => {
				if (t.id === task.id) {
					return task;
				} else {
					return t;
				}
			})
		);
	};

	const handleDeleteTask = (taskId: number) => {
		setTasks(tasks.filter((t) => t.id !== taskId));
	};

	return (
		<section>
			<header className="row mb-2">
				<div className="col">
					<h3>Todos (plain version)</h3>
				</div>
			</header>
			<AddTask onAddTask={handleAddTask} />
			<TaskList
				tasks={tasks}
				onChangeTask={handleChangeTask}
				onDeleteTask={handleDeleteTask}
			/>
		</section>
	);
};

export default TodosContainer;
