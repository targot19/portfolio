import styled from "styled-components";

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
     border: 2px solid black;
     //padding: 20px;
     //flex-direction: row;
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
    flex-wrap: wrap;
    display: flex;
    margin: 0;
    height: auto;
    `

export const Box5 = styled(SectionContainer)`
    display: flex;
    height: auto;
    flex-direction: row;`

export default SectionContainer;