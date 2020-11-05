import React from 'react';
import ValidationInput from './ValidationInput';

export default {
  title: 'Components/Molecules/ValidationInput',
  component: ValidationInput,
};

const Template = (args) => <ValidationInput {...args} />;

export const Valid = Template.bind({});
export const Error = Template.bind({});
export const ValidTextArea = Template.bind({});
export const ErrorTextArea = Template.bind({});

Valid.args = {
  placeholder: 'login',
};

Error.args = {
  placeholder: 'login',
  errorMessage: 'Must be 5 characters or more',
};

ValidTextArea.args = {
  placeholder: 'desciption',
  textarea: true,
  style: {
    borderRadius: '20px',
    height: '30vh',
  },
};

ErrorTextArea.args = {
  placeholder: 'desciption',
  errorMessage: 'Required.',
  textarea: true,
  style: {
    borderRadius: '20px',
    height: '30vh',
  },
};
