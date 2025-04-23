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
     margin-top: 2rem;
     margin-bottom: 2rem;
     gap: 1em;
     overflow: hidden;
     background-image: ${({ bgImg }) => bgImg ? `url(${bgImg})` : "none"};
     background-repeat: no-repeat;
 `;

 export const Box1 = styled(SectionContainer)`
    height: 90vh;
`;

export const Box2 = styled(SectionContainer)`
background-color: #dfba3a;
`;

export const Box3 = styled(SectionContainer)`
    margin: 0 auto;
    //flex-wrap: wrap;
    display: inline-block;
    height: 100vh;
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

export const Box5 = styled(SectionContainer)`
    display: flex;
    height: auto;
    flex-direction: row;
    margin-top: 5rem;
    margin-bottom: 5rem;
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
    height: auto;
    flex-direction: row;
    margin-top: 5rem;
    margin-bottom: 5rem;
    background-color: #81B29A;
    background-image: url(${ProjectsBg}); /* Set the background image */ // Photo by Ben Mack: https://www.pexels.com/photo/colorful-background-with-glowing-stripes-of-rainbow-6775241/
    background-size: cover; /* Ensure the image covers the entire section */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Prevent the image from repeating */
    width: 100%;
    min-height: 100vh; /* Ensure the section takes up the full viewport height */
    `

export default SectionContainer;