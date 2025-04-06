/** Inspo taken from: https://github.com/EmmaHoltegaard/porfolio-react-vite/blob/main/my-portfolio/src/components/LanguageSwitcher.jsx */

import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Translator = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "da" : "en");
    };

    return (
        <OuterWrapper>
            <InnerWrapper>
                <Button onClick={toggleLanguage}>
                    {i18n.language === "en" ? "DA" : "EN"}
                </Button>
            </InnerWrapper>
        </OuterWrapper>
    )
}

export default Translator;

const Button = styled.button`
    background-color: #efefef;
    color: #6d6d6d;
    justify-content: flex-end;
    text-decoration: none;
    
    font-family: 'Georgia', sans-serif;
    &:hover {
        background-color: #ececec;
    }
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const OuterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    
`