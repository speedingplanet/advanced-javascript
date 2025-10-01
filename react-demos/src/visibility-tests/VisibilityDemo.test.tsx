import React from 'react';
import { expect, describe, beforeEach, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import VisibilityDemo from './VisibilityDemo';

describe('Visibility tests', () => {
	beforeEach(() => {
		render(<VisibilityDemo />);
	});

	test('Toggle DOM absence', () => {
		const button = screen.getByText('Toggle DOM');
		const box = screen.queryByTestId('DOM');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();

		fireEvent.click(button);
		expect(box).not.toBeInTheDocument();
	});

	test('Toggle Visibility', () => {
		const button = screen.getByText('Toggle Visibility');
		const box = screen.queryByTestId('visibility');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		fireEvent.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});

	test('Toggle Display', () => {
		const button = screen.getByText('Toggle Display');
		const box = screen.queryByTestId('display');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		fireEvent.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});

	test('Toggle Opacity', () => {
		const button = screen.getByText('Toggle Opacity');
		const box = screen.queryByTestId('opacity');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		fireEvent.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});

	test('Toggle Hidden', () => {
		const button = screen.getByText('Toggle Hidden');
		const box = screen.queryByTestId('hidden');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		fireEvent.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});
});
