import styled from "styled-components";

const SkillBoxTextContainer = styled.div`
    text-align: center;
    padding: 0.8em;

    &:hover + div {
        transform: translateY(0); /* Slide the div into view */
    }
    
`;

export default SkillBoxTextContainer;