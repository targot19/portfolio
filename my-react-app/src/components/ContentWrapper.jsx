import styled from "styled-components";
 
 const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //border: 2px solid blue;
    padding: 1em;
    width: auto;
    max-width: 100vw;
    box-sizing: border-box;
    x-index: 1;
 `

 export const ContentWrapper1 = styled(ContentWrapper)`
    flex-wrap: no-wrap;
    margin: 5rem 20rem;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    justify-content: center;
 `;

 export const ContentWrapper2 = styled(ContentWrapper)`
    flex-wrap: no-wrap;
    margin-top: 4rem;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
    //border: 3px solid green;

    @media (max-width: 1024px) {
        width: 100%;
        margin-top: 0;
        gap: 0;
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 420px) {
        width: 80%;
    }
 `;

 export const ContentWrapper3 = styled(ContentWrapper)`
    flex-wrap: no-wrap;
    margin: auto;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
    //border: 3px solid green;
 `;

 export const EducationWrapper = styled(ContentWrapper)`
    flex-wrap: no-wrap;
    margin: 2rem 20rem;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 1600px) {
        margin: 2rem 15rem;
    }

    @media (max-width: 1024px) {
        margin: 1.5rem 10rem;
    }

    @media (max-width: 768px) {
        margin: 1rem 5rem;
    }

    @media (max-width: 420px) {
        margin: 0rem 0rem;
        gap: 0;
    }
 `;

 export const IntroWrapper = styled(ContentWrapper)`
    margin: 10rem 30rem 10rem 5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    //border: 2px solid red;

    @media (max-width: 1024px) {
        margin: 5rem 20rem 5rem 5rem;
        align-items: left;
    }

    @media (max-width: 768px) {
        width: 50%;
    }

    @media (max-width: 420px) {
        width: 10%;
    }
 `;

 export const ContactWrapper = styled(ContentWrapper)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    width: auto;
    max-width: 100vw;
    box-sizing: border-box;
    x-index: 1;

    @media (max-width: 1024px) {
        padding: 0;
    }

    @media (max-width: 768px) {
        width: 50%;
        justify-content: center;
        padding-bottom: 1rem;
    }

    @media (max-width: 420px) {
        width: 80%;
    }
 `;
 
 export default ContentWrapper;