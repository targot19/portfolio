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
        font-color: black;
        background-color: white;
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding: 2rem;
    }

    @media (max-width: 768px) {
        .container {
            flex-direction: column; /* Stack elements vertically on smaller screens */
        }
    }

    img, video {
        max-width: 100%;
        height: auto;
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