import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'Components/Atoms/Paragraph',
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args}>Hello Wiktoria</Paragraph>;

export const Primary = Template.bind({});
