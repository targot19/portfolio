import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    body {
        background-color: #F4F1DE;
        font-family: "Verdana", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        font-color: black;
        margin: 0;
        padding: 0;
        min-width: 100%;
        min-height: 100%;
        width: 100%;
        height: 100%;
        display: block;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 4rem;
    }

    .button {
        background-color: #3D405B;
        color: #F4F1DE;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;

        -webkit-text-fill-color: #F4F1DE;
    }

    @media (max-width: 768px) {
        body {
            font-size: 14px;
        }
    }

    @media (max-width: 420px) {
        body {
            font-size: 12px;
        }
    }

    body::-webkit-scrollbar {
        width: 10px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #CB997E;
    }
`

export default GlobalStyles;