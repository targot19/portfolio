import styled from "styled-components";
 
 const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    //align-items: center; /* Center children horizontally */
    justify-content: center;
    border: 2px solid blue; /* Optional: For debugging layout */
    padding: 1em;
    width: 60vw; /* Allow the width to adjust to the content */
    max-width: 100vw;
    box-sizing: border-box;
    x-index: 1;
    flex-wrap: wrap;
 `

 export const ContentWrapper1 = styled(ContentWrapper)`
    flex-wrap: wrap;
    margin: auto;
    flex-direction: column;
    gap: 2em;
    align-items: flex-start;
    justify-content: flex-start;
 `;
 
 export default ContentWrapper;