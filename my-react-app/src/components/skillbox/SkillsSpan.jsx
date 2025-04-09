import styled from "styled-components";
import SkillBoxContainer from "./SkillBoxContainer";

const SkillsSpan = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #f9f9f9;
    padding: 10px;
    border-top: 1px solid #ccc;
    transform: translateY(100%);
    transition: transform 0.5s ease-in-out; /* Smooth slide-in effect */
    text-align: center;

    span {
        font-size: 0.9em;
        color: #333;
    }

    ${SkillBoxContainer}:hover & {
        transform: translateY(0);
    }
`;

export default SkillsSpan;