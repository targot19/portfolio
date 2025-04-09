import Github from "../assets/Github.svg";
import styled from "styled-components";


const GithubButton = () => {
    return (
        <StyledButton>
            <a href='https://github.com/targot19' target='blank' rel='noopener noreferrer'>
                <img src={Github} alt="Github. Source: https://icons8.com/icon/62856/github" />
            </a>
        </StyledButton>
    )
}

const StyledButton = styled.button`
    width: auto;
    height: 3em;
    border-radius: 5%;
    background-color: transparent;
    cursor: pointer;
    border: black;

    .img {
    width: 3em;
    height: 3em;

    &:hover {
        transform: scale(1.05);
        transition: all 0.35s linear;
    }
}`;

export default GithubButton;