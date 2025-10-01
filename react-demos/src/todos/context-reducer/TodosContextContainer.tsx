import React, { Reducer, createContext, useReducer } from 'react';
import AddTask from './AddContextTask';
import TaskList from './TaskContextList';
import { Task, TodoAction } from '../tasks';

export const TasksContext = createContext<Array<Task> | null>(null);
export const DispatchContext = createContext<React.Dispatch<TodoAction> | null>(null);

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

const TodosContextContainer = () => {
	const [tasks, dispatch] = useReducer(reducer, initialTasks);

	return (
		<DispatchContext.Provider value={dispatch}>
			<TasksContext.Provider value={tasks}>
				<section>
					<header className="row mb-2">
						<div className="col">
							<h3>Todos (context and reducer version)</h3>
						</div>
					</header>
					<AddTask />
					<TaskList />
				</section>
			</TasksContext.Provider>
		</DispatchContext.Provider>
	);
};

export default TodosContextContainer;
