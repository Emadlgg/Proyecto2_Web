import React from 'react'
import CalculatorButton from './CalculatorButton'

const buttonConfigs = [
  { value: 'AC', type: 'clear', className: 'clear', testId: 'clear' },
  { value: '+/-', type: 'toggleSign', className: 'operator', testId: 'toggle-sign' },
  { value: '%', type: 'operation', valueForOperation: '%', className: 'operator', testId: 'modulo' },
  { value: '÷', type: 'operation', valueForOperation: '/', className: 'operator', testId: 'divide' },
  { value: '7', type: 'number', testId: 'number-7' },
  { value: '8', type: 'number', testId: 'number-8' },
  { value: '9', type: 'number', testId: 'number-9' },
  { value: '×', type: 'operation', valueForOperation: '*', className: 'operator', testId: 'multiply' },
  { value: '4', type: 'number', testId: 'number-4' },
  { value: '5', type: 'number', testId: 'number-5' },
  { value: '6', type: 'number', testId: 'number-6' },
  { value: '-', type: 'operation', valueForOperation: '-', className: 'operator', testId: 'subtract' },
  { value: '1', type: 'number', testId: 'number-1' },
  { value: '2', type: 'number', testId: 'number-2' },
  { value: '3', type: 'number', testId: 'number-3' },
  { value: '+', type: 'operation', valueForOperation: '+', className: 'operator', testId: 'add' },
  { value: '0', type: 'number', className: 'zero', testId: 'number-0' },
  { value: '.', type: 'decimal', testId: 'decimal' },
  { value: '=', type: 'equals', className: 'equals', testId: 'equals' }
]

const Keypad = ({ onButtonClick }) => (
  <div className="keypad">
    {buttonConfigs.map((btn, i) => (
      <CalculatorButton
        key={i}
        value={btn.value}
        onClick={() => onButtonClick(btn.type, btn.valueForOperation || btn.value)}
        className={btn.className}
        testId={btn.testId}
      />
    ))}
  </div>
)

export default Keypad
