import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    :root {
    --font-size-large: 2rem;
    --font-size-medium: 1.5rem;
    --font-size-small: 1rem;
    --primary-color: #81B29A;
    --secondary-color: #CB997E;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Georgia", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: block;
        overflow-x: hidden;
        font-color: black;
        background-color: #F4F1DE;
        overflow-y: scroll;
    }

    @media (max-width: 768px) {
        body {
            font-size: 14px; /* Adjust font size for tablets */
        }
    }

    @media (max-width: 480px) {
        body {
            font-size: 12px; /* Adjust font size for mobile */
        }
    }

    body::-webkit-scrollbar {
        width: 10px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #CB997E;
    }

    .parent-container {
    position: relative;
    height: 100%;
    overflow: visible;
}
    
    html {
        scroll-behavior: smooth;
        scroll-padding-top: 4rem;
        font-size: 16px;
    }

    .p {
        font-family: "Verdana", sans-serif;
    }
`

export default GlobalStyles;