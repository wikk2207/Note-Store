import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});
export const Search = Template.bind({});

Normal.args = {
  placeholder: 'login',
};

Search.args = {
  placeholder: 'search',
  search: true,
};
