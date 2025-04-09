import styled from "styled-components";
 
 const ContentWrapper = styled.div`
    position: relative;
    display: flex; /* Use flexbox for layout */
    flex-direction: column; /* Stack children vertically */
    //align-items: center; /* Center children horizontally */
    justify-content: center; /* Center children vertically */
    //border: 2px solid blue; /* Optional: For debugging layout */
    padding: 1em; /* Add padding inside the wrapper */
    width: 50vw; /* Allow the width to adjust to the content */
    max-width: 100vw; /* Prevent it from exceeding the parent container */
    box-sizing: border-box; /* Include padding and border in the width/height */
    x-index: 1;
 `

 export const ContentWrapper1 = styled(ContentWrapper)`
    flex-wrap: wrap;
    margin: auto;
 `;
 
 export default ContentWrapper;