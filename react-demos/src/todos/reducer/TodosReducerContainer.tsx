import React, { Reducer, useReducer } from 'react';
import AddTask from '../plain/AddTask';
import TaskList from '../plain/TaskList';
import { Task, TodoAction } from '../tasks';

let nextId = 4;
const initialTasks: Array<Task> = [
	{ id: 1, text: 'Groceries', done: false },
	{ id: 2, text: 'Change oil', done: true },
	{ id: 3, text: 'Clean kitchen table', done: false },
];

const reducer: Reducer<Array<Task>, TodoAction> = (state, action) => {
	switch (action.type) {
		case 'todos/add':
			return [
				...state,
				{
					id: nextId++,
					text: action.text,
					done: false,
				},
			];
		case 'todos/change':
			return state.map((t) => {
				if (t.id === action.task.id) {
					return action.task;
				} else {
					return t;
				}
			});
		case 'todos/delete':
			return state.filter((t) => t.id !== action.taskId);
		default:
			throw Error(`No case found!`);
	}
};

const TodosReducerContainer = () => {
	const [tasks, dispatch] = useReducer(reducer, initialTasks);

	return (
		<section>
			<header className="row mb-2">
				<div className="col">
					<h3>Todos (reducer version)</h3>
				</div>
			</header>
			<AddTask onAddTask={(text) => dispatch({ type: 'todos/add', text })} />
			<TaskList
				tasks={tasks}
				onChangeTask={(task) => dispatch({ type: 'todos/change', task })}
				onDeleteTask={(taskId) => dispatch({ type: 'todos/delete', taskId })}
			/>
		</section>
	);
};

export default TodosReducerContainer;
