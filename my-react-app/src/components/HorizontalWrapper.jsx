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
    width: 100%;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: auto;
    box-sizing: border-box;
    align-items: center;
    flex-wrap: wrap;
 `;

 export const IntroWrapperHorizon = styled(HorizontalWrapper)`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: left;
    flex: 1;
    height: auto;
    box-sizing: border-box;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 1024px) {
        padding-right: 0.8rem;
    }

    @media (max-width: 768px) {
        //padding-right: 0.5rem;
        padding-right: 0;
        margin: 0 auto;
    }

    @media (max-width: 420px) {
        //padding-right: 0.4rem;
        flex-direction: row;
        margin: 0 auto;
    }
 `;

 export const ContactWrapperHorizon = styled(HorizontalWrapper)`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: auto;
    align-items: center;
    flex-wrap: wrap;
    max-width: 30rem;

    @media (max-width: 1024px) {
        width: 90%;
        justify-content: left;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        width: auto;
        margin-bottom: 1rem;
    }

    @media (max-width: 420px) {
        flex-direction: column;
        gap: 0.5rem;
    }
 `;
 
 export default HorizontalWrapper;