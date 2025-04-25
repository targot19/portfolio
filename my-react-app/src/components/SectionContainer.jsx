import styled from "styled-components";
import EducationBg from "../assets/education.jpg"; // Photo by Taryn Elliott: https://www.pexels.com/photo/a-gradient-of-pastel-colors-8052681/

const SectionContainer = styled.section`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    height: auto;
    justify-content: center;
    align-items: center;
    gap: 1em;
    box-sizing: border-box;
 `;

 export const Box1 = styled(SectionContainer)`
    height: 38vh;
    background-image: url(${EducationBg});
    background-size: cover;
    background-position: center;
    width: 100%;
`;

export const Box3 = styled(SectionContainer)`
    margin: 0 auto;
    display: inline-block;
    height: calc(100vh - 4rem);
    width: 100%;

    @media (max-width: 1024px) {
        calc(110vh - 4rem);
    }

    @media (max-width: 768px) {
        height: calc(192vh - 4rem);
    }

    @media (max-width: 420px) {
        height: calc(220vh - 4rem);
    }
    `

export const EducationBox = styled(SectionContainer)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${EducationBg});
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 100vh;

    @media (max-width: 1600px) {
        padding: 3rem;
    }

    @media (max-width: 1024px) {
        padding: 1.5rem;
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }

    @media (max-width: 420px) {
        padding: 0.5rem;
    }
    `

 export const RecommendationBox = styled(SectionContainer)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${EducationBg});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: calc(100vh - 4rem);
    `

export const Box5 = styled(SectionContainer)`
    display: flex;
    flex-direction: row;
    height: calc(100vh - 4rem);
    width: 100%;

    @media (max-width: 1024px) {
        gap: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 480px) {
        flex-direction: column;
    }
`

export const IntroSection = styled(SectionContainer)`
    position: relative;
    display: flex;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    //border: 2px solid black;
    margin: 0;
    overflow: hidden;
    background-size: cover;
    padding: 2rem;
    flex-direction: column;

    @media (max-width: 1600px) {
        width: 100%;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 420px) {
        width: 80%;
    }
    `

export const ProjectSection = styled(SectionContainer)`
    display: flex;
    flex-direction: row;
    //margin-bottom: 5rem;
    width: 100%;
    min-height: calc(150vh - 4rem);
    //border: 1px solid black;
    `

export default SectionContainer;