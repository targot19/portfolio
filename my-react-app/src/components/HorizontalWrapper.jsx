import styled from "styled-components";
 
 const HorizontalWrapper = styled.div`
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

 export const IntroWrapperHorizon = styled(HorizontalWrapper)`
    display: flex;
     //overflow: hidden;
     width: 100%;
     flex-direction: row;
     justify-content: left;
     //border: 2px dotted red;
     flex: 1;
     height: auto;
     box-sizing: border-box;
     align-items: center;
     //min-width: 8em;
     flex-wrap: wrap;
     gap: 1rem;

    @media (max-width: 1600px) {
        width: 100%;
    }

    @media (max-width: 1024px) {
        width: 100%;
        //margin: 20rem 40rem 20rem 40rem;
        justify-content: center;
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 420px) {
        width: 80%;
    }
 `;

 export const ContactWrapperHorizon = styled(HorizontalWrapper)`
    display: flex;
     //overflow: hidden;
     width: 100%;
     flex-direction: column;
     justify-content: center;
     //border: 2px dotted red;
     flex: 1;
     height: auto;
     //box-sizing: border-box;
     align-items: center;
     //min-width: 8em;
     flex-wrap: wrap;
     //gap: 1rem;
     max-width: 30rem;

     @media (max-width: 768px) {
        flex-direction: column; /* Stack items vertically on smaller screens */
        gap: 1rem;
    }
 `;
 
 export default HorizontalWrapper;