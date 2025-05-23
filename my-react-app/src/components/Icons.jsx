import styled from 'styled-components';
import Github from "../assets/Github.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Phone from "../assets/Phone.svg";
import Mail from "../assets/Mail.svg";

const Icons = () => {
    return (
        <IconsWrapper>
            <a href='mailto:taniaargot@gmail.com' target='blank' rel='noopener noreferrer'>
            <Icon src={Mail} alt="Mail. Source: https://icons8.com/icon/YRRhCXfA0Vd0/mail" />
            </a>
            <a href='tel:+4522831999' target='blank' rel='noopener noreferrer'>
            <Icon src={Phone} alt="Phone. Source: https://icons8.com/icon/jShwZ2RCyPSO/phone" />
            </a>
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
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    gap: 30px;
    `

const Icon = styled.img`
    width: 50px;
    height: 50px;
    border: 2px dotted red;
    gap: 20px;    
    `