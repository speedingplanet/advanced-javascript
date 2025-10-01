import React from 'react';
import { test, describe, beforeEach, afterEach, beforeAll, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import BasicComponent from './BasicComponent';

describe('Testing BasicComponent', () => {
	beforeAll(() => {
		console.log('beforeAll: runs once for its containing describe _before_ all other code');
	});

	beforeEach(() => {
		console.log('beforeEach: Runs before each test.');
		render(<BasicComponent />);
	});

	afterEach(() => {
		console.log('afterEach: Runs after each test');
	});

	afterAll(() => {
		console.log('afterAll: runs once for its containing describe _after_ all other code');
	});

	test('First test', () => {
		console.log('First test is running');
		// Do some testing
	});

	test('Second test', () => {
		console.log('Second test is running');
		// Test something else
	});
});

describe('Top-level describe', () => {
	describe('Level two describe', () => {
		describe('Low-level describe', () => {
			test('Deeply nested test.', () => {
				console.log('A deeply nested test.');
			});
		});
	});
});
