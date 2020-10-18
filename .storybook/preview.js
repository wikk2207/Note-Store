import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
import GlobalStyle from '../src/theme/GlobalStyle';
import StoryRouter from 'storybook-react-router';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
));
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
addDecorator(StoryRouter());
