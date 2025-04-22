import styled from "styled-components";
 
 const HorizontalWrapper = styled.div`
     display: flex;
     //overflow: hidden;
     width: 100%;
     flex-direction: column;
     justify-content: center;
     border: 2px dotted purple;
     flex: 1;
     height: auto;
     box-sizing: border-box;
     align-items: center;
     //min-width: 8em;
     flex-wrap: wrap;
     //gap: 1em;
     
 `

 export const EducationWrapperHorizon = styled(HorizontalWrapper)`
    display: flex;
     //overflow: hidden;
     width: 100%;
     flex-direction: column;
     justify-content: center;
     //border: 2px dotted purple;
     flex: 1;
     height: auto;
     box-sizing: border-box;
     align-items: center;
     //min-width: 8em;
     flex-wrap: wrap;
     //gap: 1em;
 `;
 
 export default HorizontalWrapper;