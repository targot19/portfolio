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
                    {i18n.language === "en" ? "EN" : "DA"}
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
    padding: 10px 10px;
    font-family: 'Georgia', sans-serif;
    &:hover {
        background-color: #ececec;
    }
`;

const InnerWrapper = styled.div`
    width: 70px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

const OuterWrapper = styled.div`
    display: flex;
    width: 75%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 0px;
`