import React from 'react';
import Alert from './Alert';

export default {
  title: 'Components/Molecules/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  options: {
    type: 'success',
  },
  message: 'Successfully created new account',
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  options: {
    type: 'error',
  },
  message: 'Something went wrong',
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  options: {
    type: 'info',
  },
  message: 'Some information',
};
