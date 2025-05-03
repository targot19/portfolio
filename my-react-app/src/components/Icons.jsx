import styled from 'styled-components';

const Icons = () => {
    return (
        <IconsWrapper>
            <a href='mailto:taniaargot@gmail.com' target='blank' rel='noopener noreferrer'>
                <Icon src="/mail.svg" alt="Mail. Source: https://icons8.com/icon/YRRhCXfA0Vd0/mail" />
            </a>
            <a href='tel:+4522831999' target='blank' rel='noopener noreferrer'>
                <Icon src="/phone.svg" alt="Phone. Source: https://icons8.com/icon/jShwZ2RCyPSO/phone" />
            </a>
            <a href='https://www.linkedin.com/in/taniaargot/' target='blank' rel='noopener noreferrer'>
                <Icon src="/Linkedin.svg" alt="LinkedIn. Source: https://icons8.com/icon/8808/linkedin" />
            </a>
            <a href='https://github.com/targot19' target='blank' rel='noopener noreferrer'>
                <Icon src="/github.svg" alt="Github. Source: https://icons8.com/icon/62856/github" />
            </a>
        </IconsWrapper>
    )
}

export default Icons;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 1rem;
    flex-direction: row;

    @media (max-width: 768px) {
        padding-top: 0;
    }

    @media (max-width: 480px) {
        padding-top: 0;
    }
    `

const Icon = styled.img`
    width: 5rem;
    height: 4rem;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1, 1.1);
    }

    @media (max-width: 1024px) {
        width: 5rem;
        height: 4rem;
    }

    @media (max-width: 768px) {
        width: 4rem;
        height: 3rem;
    }

    @media (max-width: 420px) {
        width: 4rem;
        height: 3rem;
    }
    `