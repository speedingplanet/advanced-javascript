import { describe, test, expect } from 'vitest';
import { uiReducer } from './ui-slice';

describe('Testing the UI reducer', () => {
	test('Null to "text"', () => {
		let testResult = uiReducer(
			{
				sortColumn: null,
				sortDirection: null,
			},
			{ type: 'ui/sortTodos', payload: 'text' }
		);

		expect(testResult.sortColumn).toBe('text');
		expect(testResult.sortDirection).toBe('asc');
	});

	test('"text" to "done", but direction is null', () => {
		let action = { type: 'ui/sortTodos', payload: 'done' };

		let testResult = uiReducer(
			{
				sortColumn: 'text',
				sortDirection: null,
			},
			action
		);

		expect(testResult.sortColumn).toBe(action.payload);
		expect(testResult.sortDirection).toBe('asc');
	});

	test('"text" to "done", direction is "asc"', () => {
		let action = { type: 'ui/sortTodos', payload: 'done' };

		let testResult = uiReducer(
			{
				sortColumn: 'text',
				sortDirection: 'asc',
			},
			action
		);

		expect(testResult.sortColumn).toBe(action.payload);
		expect(testResult.sortDirection).toBe('asc');
	});

	test('"text" to "text", direction is "asc"', () => {
		let action = { type: 'ui/sortTodos', payload: 'text' };

		let testResult = uiReducer(
			{
				sortColumn: 'text',
				sortDirection: 'asc',
			},
			action
		);

		expect(testResult.sortColumn).toBe(action.payload);
		expect(testResult.sortDirection).toBe('desc');
	});
});
