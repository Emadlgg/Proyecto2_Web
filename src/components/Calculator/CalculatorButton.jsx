import React from 'react'

const CalculatorButton = ({
  value,
  onClick,
  className = '',
  testId
}) => (
  <button
    data-testid={testId}
    className={className}
    onClick={onClick}
  >
    {value}
  </button>
)

export default CalculatorButton
