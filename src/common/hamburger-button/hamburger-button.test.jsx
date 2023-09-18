import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { HamburgerButton } from './hamburger-button';

let isOpen = false;
const mockToggle = vi.fn(() => {
	isOpen = !isOpen;
});

describe('Hamburger Button', () => {
	afterEach(() => {
		isOpen = false;
	});

	test('should run toggleMenu', () => {
		// Arrange
		render(<HamburgerButton isOpen={isOpen} toggleMenu={mockToggle} />);
		const button = screen.getByRole('button');

		// Act
		fireEvent.click(button);

		// Assert
		expect(mockToggle).toHaveBeenCalled();
	});

	test('should toggle active classes', async () => {
		// Arrange
		const { rerender } = render(<HamburgerButton isOpen={isOpen} toggleMenu={mockToggle} />);
		const button = screen.getByRole('button');
		const [firstStick, secondStick, thirdStick] = screen.getAllByTestId('span');
		const [firstStickActiveStyle, secondStickActiveStyle, thirdStickActiveStyle] = [
			'rotate-45',
			'opacity-0',
			'-rotate-45',
		];

		// Act
		fireEvent.click(button);
		rerender(<HamburgerButton isOpen={isOpen} toggleMenu={mockToggle} />);

		// Assert
		expect(firstStick).toHaveClass(firstStickActiveStyle);
		expect(secondStick).toHaveClass(secondStickActiveStyle);
		expect(thirdStick).toHaveClass(thirdStickActiveStyle);
	});
});
