import CalculatorButton from './CalculatorButton'

export default {
  title: 'Components/CalculatorButton',
  component: CalculatorButton
}

export const NumberButton = {
  args: {
    value: '5',
    onClick: () => console.log('Button clicked'),
    testId: 'number-5'
  }
}

export const OperatorButton = {
  args: {
    value: '+',
    className: 'operator',
    onClick: () => console.log('Operator clicked'),
    testId: 'add'
  }
}
