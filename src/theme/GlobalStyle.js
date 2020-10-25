import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

    *, *::before , *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5% // makes 1rem ===  16px (HAPPY REMS)
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 1.6rem; //leaves default size 16px;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;
