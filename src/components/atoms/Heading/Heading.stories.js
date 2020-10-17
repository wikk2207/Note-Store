import React from 'react';
import Heading from './Heading';

export default {
  title: 'Components/Atoms/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args}>Hello Wiktoria</Heading>;

export const Normal = Template.bind({});
export const Big = Template.bind({});

Big.args = {
  big: true,
};
