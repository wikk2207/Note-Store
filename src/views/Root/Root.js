import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello Wiktoria</h1>
      <Button width="500px">close / safe</Button>
      <Button secondary>Remove</Button>
    </div>
  );
}

export default Root;
