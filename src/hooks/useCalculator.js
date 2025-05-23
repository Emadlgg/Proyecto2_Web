import { useState } from 'react'

export function useCalculator () {
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const MAX_DISPLAY_LENGTH = 9
  const MAX_VALUE = 999999999

  const handleNumberInput = (number) => {
    if (display === 'ERROR') {
      setDisplay(number)
      setWaitingForOperand(false)
      return
    }

    const currentDisplay = waitingForOperand ? '0' : display
    const displayWithoutSign = currentDisplay.replace('-', '')

    if (displayWithoutSign.length >= MAX_DISPLAY_LENGTH) return

    if (waitingForOperand) {
      setDisplay(number)
      setWaitingForOperand(false)
    } else {
      setDisplay(currentDisplay === '0' ? number : currentDisplay + number)
    }
  }

  const handleDecimalPoint = () => {
    if (display === 'ERROR' || waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
      return
    }

    if (!display.includes('.') &&
        display.replace('-', '').length < MAX_DISPLAY_LENGTH) {
      setDisplay(display + '.')
    }
  }

  const handleOperation = (nextOperation) => {
    if (display === 'ERROR') return

    const inputValue = parseFloat(display)

    if (storedValue === null) {
      setStoredValue(inputValue)
    } else if (operation && !waitingForOperand) {
      const result = performCalculation()
      if (result === 'ERROR') {
        handleError()
        return
      }
      setStoredValue(result)
      setDisplay(String(result))
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (operation === null) return inputValue

    let result
    switch (operation) {
      case '+':
        result = storedValue + inputValue
        break
      case '-':
        result = storedValue - inputValue
        if (result < 0) return 'ERROR'
        break
      case '*':
        result = storedValue * inputValue
        break
      case '/':
        if (inputValue === 0) return 'ERROR'
        result = storedValue / inputValue
        break
      case '%':
        if (inputValue === 0) return 'ERROR'
        result = Math.abs(storedValue % inputValue)
        break
      default:
        return inputValue
    }

    if (result > MAX_VALUE) return 'ERROR'

    const resultStr = String(result)
    const [integerPart, decimalPart] = resultStr.split('.')

    if (resultStr.length > MAX_DISPLAY_LENGTH) {
      if (decimalPart) {
        const maxDecimalDigits = MAX_DISPLAY_LENGTH - integerPart.length - 1
        if (maxDecimalDigits > 0) {
          return parseFloat(result.toFixed(maxDecimalDigits))
        }
      }
      return 'ERROR'
    }

    return result
  }

  const handleEquals = () => {
    if (operation === null || display === 'ERROR') return

    const result = performCalculation()
    if (result === 'ERROR') {
      handleError()
    } else {
      setDisplay(String(result))
      setStoredValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setStoredValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const handleToggleSign = () => {
    if (display === '0' || display === 'ERROR') return
    const newDisplay = display.startsWith('-')
      ? display.substring(1)
      : '-' + display
    if (newDisplay.replace('-', '').length > MAX_DISPLAY_LENGTH) return
    if (parseFloat(display) !== 0) {
      setDisplay(newDisplay)
    }
  }

  const handleError = () => {
    setDisplay('ERROR')
    setStoredValue(null)
    setOperation(null)
    setWaitingForOperand(true)
  }

  return {
    display,
    handleNumberInput,
    handleDecimalPoint,
    handleOperation,
    handleEquals,
    handleClear,
    handleToggleSign
  }
}
