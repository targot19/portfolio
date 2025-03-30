import styled from "styled-components";

const SectionTitleWrapper = styled.div`
    background-color:rgb(133, 63, 63); /* Set a separate background color for the title */
    padding: 10px;
    width: 50%;
    text-align: center;
    border-bottom: 2px solid #ccc; /* Optional: Add a border to separate the title */
`;

export const SectionTitleWrapper1 = styled(SectionTitleWrapper)`
    background-color: red;
`;

export const SectionTitleWrapper2 = styled(SectionTitleWrapper)`
background-color: blue;
`;

export const SectionTitleWrapper3 = styled(SectionTitleWrapper)`
background-color: green;
`;

export default SectionTitleWrapper;