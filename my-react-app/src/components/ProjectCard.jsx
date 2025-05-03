import styled from "styled-components";

const ProjectCard = ({ title, description, labels = [], image, demo, demoLink, sourceCode, sourceCodeLink }) => {

    return (
        <ProjectCardContainer>
            <ProjectImage src={image} alt={title} />
            {/*<ProjectImage src={WebDevelopment} alt="Github. Source: https://www.svgrepo.com/svg/382780/application-coding-web-code-write" />*/}
                <ProjectCardTextContainer>
                    <ProjectList>
                        {Array.isArray(labels) &&
                        labels.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ProjectList>
                        <ProjectCardTitle>{title}</ProjectCardTitle>
                        <ProjectCardText>{description}</ProjectCardText>
                        <ButtonContainer>
                            {sourceCode && <ButtonContainer><a target="_blank" rel="noopener noreferrer" href={sourceCodeLink}><CodeButtons>{sourceCode}</CodeButtons></a></ButtonContainer>}  {/* Render only if `code` exists */}
                            {demo && <ButtonContainer><a target="_blank" rel="noopener noreferrer" href={demoLink}><CodeButtons>{demo}</CodeButtons></a></ButtonContainer>}  {/* Render only if `demo` exists */}
                        </ButtonContainer>
                </ProjectCardTextContainer>
        </ProjectCardContainer>
    );
};

export default ProjectCard;

const ProjectCardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 30rem;
    border-radius: 0.8rem;
    overflow: hidden;
    background-color: transparent;
    justify-content: center;
    //border: 2px solid red;

    @media (max-width: 1024px) {
        max-width: 60rem;
        min-height: 28rem;
    }

    @media (max-width: 768px) {
        width: auto;
        flex-direction: column;
        margin: auto;
        align-items: center;
    }

    @media (max-width: 420px) {
        min-width: 25rem;
        min-height: 40rem;
        width: 100%;
        flex-direction: column;
        margin: 0;
        flex-wrap: wrap;
        align-items: center;
    }

    @media (max-width: 400px) {
        max-width: 20rem;
    }
`

const ProjectCardTextContainer = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    box-sizing: border-box;
    //border: 2px solid blue;

    @media (max-width: 1024px) {
        width: 37rem;
    }

    @media (max-width: 768px) {
        width: auto;
    }

    @media (max-width: 420px) {
        max-width: 90%;
    }

    @media (max-width: 380px) {
        max-width: 80%;
    }
`

const ProjectImage = styled.img`
    display: flex;
    border-radius: 5%;
    width: 25rem;
    max-height: 30rem;
    margin: 1rem;

    @media (max-width: 1024px) {
        width: 20rem;
        max-height: 25rem;
    }

    @media (max-width: 768px) {
        width: 17rem;
        max-height: 22rem;
    }

    @media (max-width: 420px) {
        max-width: 20rem;
        max-height: auto;
    }

    @media (max-width: 380px) {
        max-width: 20rem;
    }
`

const ProjectCardTitle = styled.h4`
    font-size: 1.5rem;
    text-align: left;
    font-weight: bold;

    @media (max-width: 1024px) {
        font-size: 1.4rem;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
    }
`

const ProjectCardText = styled.p`
    font-size: 1.2rem;
    text-align: justify;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
    }
`

const ProjectList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    li {
        display: inline-block;
        font-size: 1rem;
        padding: 0.3em 0.3em;
        border: 1px solid black;
        border-radius: 5px;
        gap: 1rem;
    }

    @media (max-width: 1024px) {
        li {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 768px) {
        li {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 420px) {
        li {
            font-size: 0.9rem;
        }
    }
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
`

const CodeButtons = styled.button`
    background-color: #3D405B;
    border-radius: 5px;
    justify-content: space-evenly;
    border: none;
    transition: border 0.3s ease-in-out;
    font-weight: bold;
    padding: 0.2rem 0.8rem;
    font-size: 1rem;

    &:hover {
        border-bottom: 4px solid #81B29A;
        border-left: 3px solid #81B29A;
    }
`