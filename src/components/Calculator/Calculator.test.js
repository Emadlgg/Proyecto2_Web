import React from 'react'
import { render, screen } from '@testing-library/react'
import Calculator from './Calculator'

jest.mock('../../hooks/useCalculator', () => ({
  useCalculator: () => ({
    display: '0',
    handleNumberInput: jest.fn(),
    handleOperation: jest.fn(),
    handleEquals: jest.fn(),
    handleClear: jest.fn(),
    handleDecimalPoint: jest.fn(),
    handleToggleSign: jest.fn()
  })
}))

describe('Calculator Component', () => {
  test('renders calculator with initial display of 0', () => {
    render(<Calculator />)
    expect(screen.getByTestId('calculator')).toBeInTheDocument()
    expect(screen.getByTestId('display')).toHaveTextContent('0')
  })
})
