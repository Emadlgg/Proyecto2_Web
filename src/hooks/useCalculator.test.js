import { renderHook, act } from '@testing-library/react'
import { useCalculator } from './useCalculator'

describe('useCalculator Hook', () => {
  test('initializes with display 0', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.display).toBe('0')
  })

  test('clears display correctly', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleNumberInput('5')
      result.current.handleClear()
    })

    expect(result.current.display).toBe('0')
  })

  test('handles single number input', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleNumberInput('5')
    })

    expect(result.current.display).toBe('5')
  })
})
