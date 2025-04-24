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
        margin: 0.5rem 2rem;
    }
 `;

 export const IntroWrapper = styled(ContentWrapper)`
    flex-wrap: no-wrap;
    margin: 10rem 40rem 10rem 5rem;
    flex-direction: column;
    //gap: 2rem;
    align-items: flex-start;
    justify-content: center;
    //border: 2px red dotted;

    @media (max-width: 1600px) {
        width: 80%;
        margin: 20rem 30rem 20rem 30rem;
    }

    @media (max-width: 1024px) {
        width: 100%;
        margin: 20rem 40rem 20rem 40rem;
        align-items: center;
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 420px) {
        width: 80%;
    }
 `;

 export const ContactWrapper = styled(ContentWrapper)`
    position: relative;
    display: flex;
    flex-direction: column;
    //align-items: center; /* Center children horizontally */
    justify-content: center;
    //border: 2px solid blue; /* Optional: For debugging layout */
    padding: 1rem;
    width: auto /* Allow the width to adjust to the content */
    max-width: 100vw;
    box-sizing: border-box;
    x-index: 1;
    //flex-wrap: wrap;

    @media (max-width: 768px) {
        margin-top: 1rem;
    }
 `;
 
 export default ContentWrapper;