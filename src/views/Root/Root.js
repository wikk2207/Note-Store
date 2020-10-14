import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Hello Wiktoria</h1>
          <Button width="500px">close / safe</Button>
          <Button secondary>Remove</Button>
          <Heading>Hello</Heading>
          <Heading big>Hello</Heading>
          <Paragraph>Heloo wiktoria</Paragraph>
          <Input />
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
