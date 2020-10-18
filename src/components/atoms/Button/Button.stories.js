import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};
// argTypes: {
//   color: {
//     control: {
//       name: 'color',
//       defaultValue: theme.primary,
//       type: 'select',
//       options: {
//         Primary: theme.primary,
//         Secondary: theme.secondary,
//         Tertiary: theme.tertiary,
//       },
//     },
//   },
// },

const Template = (args) => <Button {...args}>Hello Wiktoria</Button>;

export const Primary = Template.bind({});
// export const Primary = () => <Button>Hello Wiktoria</Button>;
// Primary.storyName = 'I am the primary';

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};
