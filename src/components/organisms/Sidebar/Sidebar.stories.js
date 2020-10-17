import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'Components/Organisms/Sidebar',
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Normal = Template.bind({});
