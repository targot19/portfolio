import styled from "styled-components";
import EducationBg from "../assets/education.jpg";
import ProjectsBg from "../assets/projects.jpg";

const SectionContainer = styled.section`
     display: flex;
     overflow: hidden;
     flex-direction: column;
     width: 100%;
     max-width: 100vw;
     height: auto;
     justify-content: center;
     align-items: center;
     //align-self: center;
     //border: 2px solid black;
     //padding: 20px;
     //flex-direction: row;
     //margin-top: -4rem;
     //margin-bottom: 2rem;
     //padding-top: 4rem;
     gap: 1em;
     //overflow: hidden;
 `;

 export const Box1 = styled(SectionContainer)`
    height: 30vh;
    background-image: url(${EducationBg}); /* Set the background image */ // Photo by Taryn Elliott: https://www.pexels.com/photo/a-gradient-of-pastel-colors-8052681/
    background-size: cover; /* Ensure the image covers the entire section */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Prevent the image from repeating */
    width: 100%;
`;

export const Box3 = styled(SectionContainer)`
    margin: 0 auto;
    //flex-wrap: wrap;
    display: inline-block;
    height: calc(100vh - 4rem);
    `

export const EducationBox = styled(SectionContainer)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-image: url(${EducationBg}); /* Set the background image */ // Photo by Taryn Elliott: https://www.pexels.com/photo/a-gradient-of-pastel-colors-8052681/
    background-size: cover; /* Ensure the image covers the entire section */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Prevent the image from repeating */
    width: 100%;
    min-height: 100vh; /* Ensure the section takes up the full viewport height */
    box-sizing: border-box;
    `

 export const RecommendationBox = styled(SectionContainer)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //padding: 2rem;
    background-image: url(${EducationBg}); // Photo by Taryn Elliott: https://www.pexels.com/photo/a-gradient-of-pastel-colors-8052681/
    background-size: cover;
    background-position: center;
    width: 100%;
    height: calc(100vh - 4rem);
    //box-sizing: border-box;
    `

export const Box5 = styled(SectionContainer)`
    display: flex;
    flex-direction: row;
    height: calc(100vh - 4rem);
    width: 100%;
    `

export const IntroSection = styled(SectionContainer)`
    position: relative; /* Create a stacking context */
    display: flex;
     width: 100vw;
     max-width: 100vw;
     height: 100vh;
     justify-content: center;
     align-items: center;
     align-self: center;
     //border: 2px solid black;
     padding: 0; /* Remove padding */
    margin: 0; /* Remove margin */
     overflow: hidden;
     background-size: cover;
    `

export const ProjectSection = styled(SectionContainer)`
    display: flex;
    //height: calc(auto - 4rem);
    flex-direction: row;
    //margin: auto;
    margin-bottom: 5rem;
    //background-color: #81B29A;
    width: 100%;
    min-height: calc(150vh - 4rem); /* Ensure the section takes up the full viewport height */
    //border: 1px solid black;
    `

export default SectionContainer;