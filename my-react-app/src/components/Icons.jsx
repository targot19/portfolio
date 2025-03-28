import styled from 'styled-components';
import Github from "../assets/Github.svg";
import LinkedIn from "../assets/LinkedIn.svg";

const Icons = () => {
    return (
        <IconsWrapper>
            <a href='https://www.linkedin.com/in/taniaargot/' target='blank' rel='noopener noreferrer'>
            <Icon src={LinkedIn} alt="LinkedIn. Source: https://icons8.com/icon/8808/linkedin"/>
            </a>
            <a href='https://github.com/targot19' target='blank' rel='noopener noreferrer'>
            <Icon src={Github} alt="Github. Source: https://icons8.com/icon/62856/github" />
            </a>
        </IconsWrapper>
    )
}

export default Icons;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 3px solid black;
    gap: 30px;
    `

const Icon = styled.img`
    width: 30px;
    height: 30px;
    border: 2px dotted red;
    gap: 20px;    
    `