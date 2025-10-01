import { describe, it, expect, test } from 'vitest';

// Group tests under a describe function
// describe(description, grouping function)
describe('it() tests:', () => {
	// it(description, test function)
	it('should pass (arrow-style)', () => {
		let sum = 2 + 3;

		// Expectation: expect(actual).matcher(expected)
		expect(sum).toEqual(5);
	});

	it('should pass (function definition)', function () {
		let sum = 2 + 3;
		expect(sum).toEqual(5);
	});
});

describe('test() tests:', () => {
	// Same style as "it" but uses "test" instead
	test('Minimal test', () => {
		expect(2 + 3).toEqual(5);
	});
});

/*
	Use skip() to skip a test.
	Also works on describe!
*/
describe('skip() examples', () => {
	test('Test 1', () => {
		expect(1).toBeTruthy();
	});

	test.skip('Test 2', () => {
		expect(1).toBeTruthy();
	});

	test.skip('Test 3', () => {
		expect(1).toBeTruthy();
	});

	test('Test 4', () => {
		expect(1).toBeTruthy();
	});
});

/* 
	Use "only" to opt out all other tests and run solely the tests with ".only"
	Also works on describe!
*/
describe('only() example', () => {
	test.only('Test 1', () => {
		expect(1).toBeTruthy();
	});

	test('Test 2', () => {
		expect(1).toBeTruthy();
	});

	test.only('Test 3', () => {
		expect(1).toBeTruthy();
	});

	test('Test 4', () => {
		expect(1).toBeTruthy();
	});
});
