import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './button';

describe('Button', () => {
	it('should render the button text', () => {
		render(<Button>Button</Button>);
		screen.getByText('Button');
	});

	it('should have the correct variant', () => {
		render(<Button variant="destructive">Button</Button>);
		expect(screen.getByRole('button')).toHaveClass('bg-destructive');
	});

	it('should have the correct size', () => {
		render(<Button size="sm">Button</Button>);
		expect(screen.getByRole('button')).toHaveClass('h-8');
	});

	it('should call the onClick handler when clicked', () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Button</Button>);
		const button = screen.getByRole('button');
		button.click();
		expect(handleClick).toHaveBeenCalled();
	});

	it('should render children inside the button', () => {
		render(
			<Button>
				<span>Icon</span>
				<span>Text</span>
			</Button>
		);
		expect(screen.getByText('Icon')).toBeInTheDocument();
		expect(screen.getByText('Text')).toBeInTheDocument();
	});

	it('should render as a slot when asChild is true', () => {
		const onClick = vi.fn();
		render(
			<Button asChild onClick={onClick}>
				<a role="link">Button</a>
			</Button>
		);
		const slot = screen.getByRole('link');
		expect(slot).toBeInTheDocument();
		slot.click();
		expect(onClick).toHaveBeenCalled();
	});
});
