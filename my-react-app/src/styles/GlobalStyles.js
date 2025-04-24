import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    export const breakpoints = {
        phoneSm: "420px",
        phone: "767px",
        tablet: "768px",
        tabletLg: "1024px",
        desktop: "1025px",
        desktopLg: "1600px",
    };

    body {
        background-color: #F4F1DE;
        font-family: "Verdana", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        font-color: black;
        margin: 0;
        padding: 0;
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

    @media (max-width: 1600px) {
        body {
            font-size: 20px;
        }
    }

    @media (max-width: 1024px) {
        body {
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        body {
            font-size: 16px;
        }
    }

    @media (max-width: 420px) {
        body {
            font-size: 14px;
        }
    }



    :root {
    --font-size-large: 2rem;
    --font-size-medium: 1.5rem;
    --font-size-small: 1rem;
    --primary-color: #81B29A;
    --secondary-color: #CB997E;
    }


    body::-webkit-scrollbar {
        width: 10px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #CB997E;
    }


`

export default GlobalStyles;