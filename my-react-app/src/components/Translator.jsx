/** Inspo taken from: https://github.com/EmmaHoltegaard/porfolio-react-vite/blob/main/my-portfolio/src/components/LanguageSwitcher.jsx */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Translator = () => {
    const { i18n } = useTranslation();
    const [isRotated, setIsRotated] = useState(false);

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "en" ? "da" : "en";
        i18n.changeLanguage(newLanguage);
        setIsRotated(!isRotated); // Toggle rotation state
    };

    return (
        <OuterWrapper>
            <InnerWrapper>
                <Button onClick={toggleLanguage} isRotated={isRotated}>
                    <ButtonText isRotated={isRotated}>
                        {i18n.language === "en" ? "DA" : "EN"}
                    </ButtonText>
                </Button>
            </InnerWrapper>
        </OuterWrapper>
    );
};

export default Translator;

const Button = styled.button`
    background-color: #CB997E;
    color: black;
    font-family: 'Georgia', sans-serif;
    border: none;
    cursor: pointer;
    padding: 0.3rem 0.8rem;
    font-size: 1rem;
    border-radius: 5px;
    transform: rotateY(${(props) => (props.isRotated ? "180deg" : "0deg")});
    transition: transform 0.5s ease, background-color 0.5s ease;

    &:hover {
        background-color: #CB997E;
    }
`;

const ButtonText = styled.span`
    display: inline-block;
    transform: rotateY(${(props) => (props.isRotated ? "180deg" : "0deg")});
    transition: transform 0.5s ease;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const OuterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;