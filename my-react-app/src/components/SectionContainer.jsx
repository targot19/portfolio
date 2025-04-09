import styled from "styled-components";

const SectionContainer = styled.section`
     display: flex;
     width: 100vw;
     max-width: 100vw;
     height: 100vh;
     justify-content: center;
     align-items: center;
     align-self: center;
     border: 2px solid black;
     padding: 20px;
     gap: 1em;
     overflow: hidden;
     background-image: ${({ bgImg }) => bgImg ? `url(${bgImg})` : "none"};
     background-repeat: no-repeat;
 `;

 export const Box1 = styled(SectionContainer)`
    height: 90vh;
`;

export const Box2 = styled(SectionContainer)`
background-color: #fba47e;
`;

export const Box3 = styled(SectionContainer)`
    margin: 0 auto; /* Remove margin */
    `

export default SectionContainer;