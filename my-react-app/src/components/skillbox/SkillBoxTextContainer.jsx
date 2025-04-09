import styled from "styled-components";

const SkillBoxTextContainer = styled.div`
    text-align: center;
    padding: 1em;
    overflow: hidden;

    &:hover + div {
        transform: translateY(0);
    }
    
`;

export default SkillBoxTextContainer;