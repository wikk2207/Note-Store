import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
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
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
