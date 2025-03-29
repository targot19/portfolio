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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-color:rgb(237, 216, 216);
        background-color:rgb(19, 11, 11);
    }
`

export default GlobalStyles;