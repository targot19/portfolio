import styled from "styled-components";

const SectionTitle = styled.h1`
    font-size: 4rem;
    color: #333;
    text-align: center;
    font-weight: bold;
    font-family: system-ui;
    letter-spacing: 0.01em;
    //border: 2px red dotted;
    margin: auto;

    @media (max-width: 768px) {
        font-size: 3rem; /* Smaller size for tablets */
    }
    @media (max-width: 480px) {
        font-size: 2rem; /* Smaller size for mobile */
    }
`;

export const SectionTitleIntro = styled(SectionTitle)`
    text-align: left;
    padding: none;
    margin: none;
`;

export const SectionTitleEducation = styled(SectionTitle)`
    margin-bottom: 2rem;`

export const SectionTitleRecommendation = styled(SectionTitle)`
    margin-top: 4rem;
    margin-bottom: 1rem;`

export const SectionTitleProjects = styled(SectionTitle)`
    //margin-top: 4rem;
    margin-bottom: 4rem;`

export default SectionTitle;