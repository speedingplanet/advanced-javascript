export interface Task {
	id: number;
	text: string;
	done: boolean;
}

export type InputTask = Omit<Task, 'id'>;

export interface AddAction {
	type: 'todos/add';
	text: string;
}

export interface EditAction {
	type: 'todos/change';
	task: Task;
}

export interface DeleteAction {
	type: 'todos/delete';
	taskId: number;
}

// Discriminated union: https://mkosir.github.io/typescript-style-guide/#discriminated-union
export type TodoAction = AddAction | EditAction | DeleteAction;
