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
    margin-bottom: 1rem;
    flex-direction: row;
    width: 70rem;
    height: 30rem;
    //border: 1px solid red;
    border-radius: 0.8em;
    //box-shadow: 5px 15px 15px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: transparent;
`

const ProjectCardTextContainer = styled.div`
    margin: 1rem;
    //overflow: hidden;
    display: flex;
    //align-items: start;
    //justify-content: start;
    flex-direction: column;
    //gap: 0.5rem;
    //border: 3px solid black;
    width: 40rem;
`

const ProjectImage = styled.img`
    //overflow: hidden;
    display: flex;
    //align-items: start;
    //justify-content: start;
    //border: 2px solid green;
    border-radius: 5%;
    width: 25rem;
    max-height: 30rem;
    margin: 1rem;
`

const ProjectCardTitle = styled.h4`
    font-family: "Libre Franklin", serif;
    font-size: 1.5em;
    text-align: left;
    padding: 0.1em;
    font-weight: bold;
    //border: 1px dotted red;
`

const ProjectCardText = styled.p`
    font-family: "Verdana", sans-serif;
    font-size: 1rem;
    text-align: justify;
    //border: 2px dotted black;
`

const ProjectList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-bottom: 2rem;
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

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    //border: 2px solid green;
`

const CodeButtons = styled.button`
    background-color: #3D405B;
    border-radius: 5px;
    justify-content: space-evenly;
    border: none;
    transition: border 0.3s ease-in-out;
    //font-family: "Poppins", serif;
    font-weight: bold;
    padding: 0.2rem 0.8rem;

    &:hover {
        border-bottom: 4px solid #81B29A;
        border-left: 3px solid #81B29A;
    }
`