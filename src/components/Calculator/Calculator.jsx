import React from 'react'
import { useCalculator } from '../../hooks/useCalculator'
import Display from './Display'
import Keypad from './Keypad'
import './Calculator.css'

const Calculator = () => {
  const {
    display,
    handleNumberInput,
    handleDecimalPoint,
    handleOperation,
    handleEquals,
    handleClear,
    handleToggleSign
  } = useCalculator()

  const handleButtonClick = (type, value) => {
    switch (type) {
      case 'number':
        handleNumberInput(value)
        break
      case 'decimal':
        handleDecimalPoint()
        break
      case 'operation':
        handleOperation(value)
        break
      case 'equals':
        handleEquals()
        break
      case 'clear':
        handleClear()
        break
      case 'toggleSign':
        handleToggleSign()
        break
      default:
        break
    }
  }

  return (
    <div className="calculator" data-testid="calculator">
      <Display value={display} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  )
}

export default Calculator
