import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Georgia", sans-serif;
        font-weight: 400;
        font-style: normal;
        margin: 0;
        padding: 0;
        display: block;
        font-color:rgb(37, 24, 24);
        background-color: #efefef;
    }
    
    html {
        scroll-behavior: smooth;
    }
`

export default GlobalStyles;