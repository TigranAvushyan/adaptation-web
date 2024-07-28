import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

import { Button } from './button'

describe('Button', () => {
	it('should render the button text', () => {
		render(<Button />)
	})
})
