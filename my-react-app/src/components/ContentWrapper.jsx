import styled from "styled-components";
 
 const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    //align-items: center; /* Center children horizontally */
    justify-content: center;
    //border: 2px solid blue;
    padding: 1em;
    width: auto /* Allow the width to adjust to the content */
    max-width: 100vw;
    box-sizing: border-box;
    x-index: 1;
    //flex-wrap: wrap;
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
 `;

 export const IntroWrapper = styled(ContentWrapper)`
    flex-wrap: no-wrap;
    margin: 10rem 40rem 10rem 5rem;
    flex-direction: column;
    //gap: 2rem;
    align-items: flex-start;
    justify-content: center;
    //border: 2px red dotted;
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
 `;
 
 export default ContentWrapper;