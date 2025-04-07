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
        width: 100%;
        height: 100%;
        display: block;
        overflow-x: hidden;
        font-color:rgb(37, 24, 24);
        background-color: #010101;
    }
    
    html {
        scroll-behavior: smooth;
        margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Prevent horizontal scrolling */
    }
`

export default GlobalStyles;