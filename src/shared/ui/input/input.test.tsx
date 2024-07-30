import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Input } from './input';

describe('Input', () => {
	it('should render the input element', () => {
		render(<Input />);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should call the onChange handler when the input value changes', () => {
		const handleChange = vi.fn();
		render(<Input onChange={handleChange} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'test' } });
		expect(handleChange).toHaveBeenCalledTimes(1);
	});
});
