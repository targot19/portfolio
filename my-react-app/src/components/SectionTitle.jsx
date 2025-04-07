import styled from "styled-components";

const SectionTitle = styled.h1`
    font-size: 4em;
    color: #333;
    text-align: center;
    font-weight: bold;
    font-family: system-ui;
    letter-spacing: 0.01em;
    border: 2px red dotted;
`;

export const SectionTitleIntro = styled(SectionTitle)`
    text-align: left;
    padding: none;
    margin: none;
`;

export default SectionTitle;