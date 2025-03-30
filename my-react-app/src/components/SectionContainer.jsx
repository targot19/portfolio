import styled from "styled-components";

const SectionContainer = styled.section`
     display: flex;
     width: 100vw;
     justify-content: center;
     align-items: center;
     align-self: center;
     border: 2px solid black;
     padding: 20px;
     gap: 20px;
     overflow: visible;
 `;

 export const Box1 = styled(SectionContainer)`
    background-color: red;
`;

export const Box2 = styled(SectionContainer)`
background-color: blue;
`;

export const Box3 = styled(SectionContainer)`
background-color: green;
`;

export default SectionContainer;