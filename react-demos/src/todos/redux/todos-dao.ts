import { InputTask } from '../tasks';

let baseUrl = 'http://localhost:8000/tasks';

async function fetchTodos() {
	try {
		let response = await fetch(baseUrl);
		if (response.ok) {
			let results = await response.json();
			return results;
		} else {
			throw Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.log('todos-dao error:', error);
		throw error;
	}
}

async function saveTodo(task: InputTask) {
	try {
		let response = await fetch(baseUrl, {
			method: 'post',
			body: JSON.stringify(task),
			headers: { 'Content-type': 'application/json' },
		});
		if (response.ok) {
			let results = await response.json();
			return { ...results, ...task };
		} else {
			throw Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.log('todos-dao error:', error);
		throw error;
	}
}

let dao = {
	fetchTodos,
	saveTodo,
};

export { dao };
