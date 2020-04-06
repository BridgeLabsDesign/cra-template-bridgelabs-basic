import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        background: #fff;
        font-family: "Open Sans",sans-serif;
    }
`;

export default GlobalStyle;
