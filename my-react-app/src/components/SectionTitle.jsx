import styled from "styled-components";

const SectionTitle = styled.h1`
    font-size: 4rem;
    color: #333;
    text-align: center;
    font-weight: bold;
    font-family: system-ui;
    letter-spacing: 0.01em;
    margin: auto;

    @media (max-width: 1024px) {
        font-size: 3rem;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 420px) {
        font-size: 1.9rem;
    }
`;

export const SectionTitleIntro = styled(SectionTitle)`
    text-align: left;
    padding: none;
    margin: none;
`;

export const SectionTitleEducation = styled(SectionTitle)`
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        margin-bottom: 0;
    }

    @media (max-width: 420px) {
        margin-bottom: 0;
    }
`

export const SectionTitleRecommendation = styled(SectionTitle)`
    margin-top: 4rem;
    margin-bottom: 1rem;
`

export const SectionTitleProjects = styled(SectionTitle)`
    //margin-top: 4rem;
    margin-bottom: 4rem;

    @media (max-width: 1024px) {
        margin-top: 4rem;
        margin-bottom: 4rem;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 420px) {
        font-size: 1.9rem;
    }
`

export default SectionTitle;