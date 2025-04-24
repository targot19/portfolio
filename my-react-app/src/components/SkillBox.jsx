import styled from "styled-components";

const SkillBox = ({ title, description, skills, image }) => {

    return (
        <SkillBoxContainer>
            <SkillBoxTextContainer>
                <SkillsImage src={image} alt={title} />
                {/*<SkillsImage src={WebDevelopment} alt="Github. Source: https://www.svgrepo.com/svg/382780/application-coding-web-code-write" />*/}
                <SkillBoxTitle>{title}</SkillBoxTitle>
                <SkillBoxText>{description}</SkillBoxText>
            </SkillBoxTextContainer>
            <SkillsSpan>
                <span>
                    <SkillsList>
                        {skills.map((item, index) => (
                             <li key={index}>{item}</li>
                        ))}
                    </SkillsList>
                </span>
            </SkillsSpan>
        </SkillBoxContainer>
    );
};

export default SkillBox;

const SkillBoxContainer = styled.div`
    position: relative;
    width: 45rem;
    height: 17rem;
    padding: 0.2em;
    //border: 1px solid #ccc;
    border-radius: 0.8em;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: #CB997E;

    @media (max-width: 1600px) {
        width: 45rem;
        height: 17rem;
    }

    @media (max-width: 1024px) {
        width: 31rem;
        height: 14rem;
    }

    @media (max-width: 768px) {
        width: 30rem;
        height: 12rem;
    }

    @media (max-width: 420px) {
        width: 25rem;
        height: 8rem;
    }
`

const SkillBoxTextContainer = styled.div`
    text-align: center;
    padding: 1.2rem;
    overflow: hidden;

    &:hover + div {
        transform: translateY(0);
    }
`

const SkillsImage = styled.img`
    overflow: hidden;
    display: block;
    width: 4rem;
    height: 4rem;
    margin: auto;
`

const SkillBoxTitle = styled.h4`
    font-family: system-ui;
    font-size: 1.5rem;
    text-align: center;
    padding: 0.1rem;
`

const SkillBoxText = styled.p`
    font-family: "Verdana", sans-serif;
    font-size: 1.1rem;
    text-align: center;

    @media (max-width: 1600px) {
        font-size: 1.1rem;
    }

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }

    @media (max-width: 420px) {
        font-size: 0.8rem;
    }
`

const SkillsSpan = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #F4F1DE;
    padding: 10px;
    border-top: 1px solid #ccc;
    transform: translateY(100%);
    transition: transform 0.5s ease-in-out; /* Smooth slide-in effect */
    text-align: center;

    span {
        font-size: 0.9rem;
        color: #333;
    }

    ${SkillBoxContainer}:hover & {
        transform: translateY(0);
    }
`

const SkillsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    
    li {
        display: inline-block;
        font-size: 1em;
        padding: 0.3em 0.3em;
        border: 1px solid black;
        border-radius: 5px;
        gap: 1em;
    }
`