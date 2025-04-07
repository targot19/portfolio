import Github from "../assets/Github.svg";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";


const GithubButton = () => {
    const { t, i18n } = useTranslation();

    return (
        <StyledButton>
            <a href='https://github.com/targot19' target='blank' rel='noopener noreferrer'>
                <img src={Github} alt="Github. Source: https://icons8.com/icon/62856/github" />
                {t("github.button")}
            </a>
        </StyledButton>
    )
}

const StyledButton = styled.button`
   width: 9em;
    height: 3em;
    border-radius: 5%;
    background-color: red;
    color: black;
    font-size: 1em;
    cursor: pointer;
    margin: 0 1em 0 0;
    &:hover {
        background-color: darkred;
    }

    img {
        width: 2em;
        height: auto;
    }
`;

export default GithubButton;