import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Button } from '.';

describe('Button', () => {
	test('should render the primary variant', () => {
		render(<Button variant="primary">Button</Button>);
		const button = screen.getByText('Button');

		expect(button.tagName).toBe('BUTTON');
		expect(button).toHaveClass('bg-brand-green');
	});

	test('should render the secondary variant', () => {
		render(<Button variant="secondary">Button</Button>);
		const button = screen.getByText('Button');

		expect(button).toHaveClass('bg-brand-yellow');
	});

	test('should render the terciary variant', () => {
		render(<Button variant="terciary">Button</Button>);
		const button = screen.getByText('Button');

		expect(button).toHaveClass('bg-white border-2');
	});

	test('should render the danger variant', () => {
		render(<Button variant="danger">Button</Button>);
		const button = screen.getByText('Button');

		expect(button).toHaveClass('bg-white border-brand-red');
	});

	test('should run onClick', () => {
		const onClick = vi.fn(() => void 0);

		render(<Button onClick={onClick}>Button</Button>);
		const button = screen.getByText('Button');

		fireEvent.click(button);

		expect(onClick).toHaveBeenCalled();
	});

	test('should render anchor component if href is specified', () => {
		const url = '/page';

		render(
			<MemoryRouter basename="/">
				<Button href={url}>Link</Button>
			</MemoryRouter>
		);

		const link = screen.getByText('Link');

		expect(link.tagName).toBe('A');
		expect(link).toHaveAttribute('href', url);
	});
});
