import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        name: 'color',
        defaultValue: 'hsl(49,100%, 58%)',
        type: 'select',
        options: {
          Primary: 'hsl(49,100%, 58%)',
          Secondary: 'hsl(196, 83%, 75%)',
          Tertiary: 'hsl(106, 47%, 64%)',
        },
      },
    },
  },
};

export const Primary = (args) => <Button color={args.color}>Hello Wiktoria</Button>;
// Primary.storyName = 'I am the primary';

export const Secondary = () => <Button secondary>Hello Wiktoria</Button>;
