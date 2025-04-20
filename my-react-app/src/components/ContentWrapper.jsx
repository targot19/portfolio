import styled from "styled-components";
 
 const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    //align-items: center; /* Center children horizontally */
    justify-content: center;
    border: 2px solid blue; /* Optional: For debugging layout */
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
    margin: auto;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    justify-content: flex-start;
    border: 3px solid green;
 `;
 
 export default ContentWrapper;