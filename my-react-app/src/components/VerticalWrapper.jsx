import styled from "styled-components";

const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: row; /* Stack items horizontally */
    gap: 2rem; /* Add spacing between the boxes */
    justify-content: space-between; /* Distribute space between items */
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    align-items: flex-start; /* Align items at the top */
    border: 2px dotted green;
`;
export default VerticalWrapper;