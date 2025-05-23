import Keypad from './Keypad'

export default {
  title: 'Calculator/Keypad',
  component: Keypad
}

const Template = (args) => <Keypad {...args} />

export const Default = Template.bind({})
Default.args = {
  onButtonClick: (type, value) => console.log(type, value)
}
