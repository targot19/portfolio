import ContentWrapper from "./ContentWrapper"
import HorizontalWrapper from "./HorizontalWrapper"
import Github from "../assets/Github.svg";
import VerticalWrapper from "./VerticalWrapper";
import styled from "styled-components";

const SkillBox = () => {
    return (
        <SkillBoxContainer>
            <img src={Github} alt="Github. Source: https://icons8.com/icon/62856/github" />
            <SkillBoxText>
                <h3>Web Development</h3>
                <p>bla bla bla</p>
                <Skills>
                    <span>Additional Skills</span>
                </Skills>
            </SkillBoxText>
        </SkillBoxContainer>
    );
};

export default SkillBox;

const SkillBoxContainer = styled.div`
    width: 10em;
    height: 15em;
`;

const SkillBoxText = styled.div`
    width: 10em;
    height: 15em;
    position: relative; /* Ensure proper positioning for child elements */
    &:hover {
        transform: scale(1.05);
        transition: all 0.35s linear;
    }
`;

const Skills = styled.div`
    display: none; /* Initially hide the span */
    position: absolute;
    top: 50%; /* Position below the SkillBoxText */
    left: 0;
    background-color: #f9f9f9;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    ${SkillBoxText}:hover & {
        display: block;
    }
`;