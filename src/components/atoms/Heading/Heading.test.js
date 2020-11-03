import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Heading from './Heading';

describe('Heading component', () => {
  it('Renders children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading>Hello</Heading>
      </ThemeProvider>,
    );
    getByText('Hello');
  });
});
