import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    * {
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
        background-color: #F4F1DE;
        overflow-y: scroll;
    }

    body::-webkit-scrollbar {
        width: 10px; /* Set scrollbar width */
    }

    body::-webkit-scrollbar-thumb {
        background-color: #CB997E; /* Style the scrollbar thumb */
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding: 2rem;
    }
    
    html {
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden; /* Prevent horizontal scrolling */
    }

    .p {
        font-family: "Verdana", sans-serif;
    }
`

export default GlobalStyles;