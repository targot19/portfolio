import SkillBoxContainer from "./skillbox/SkillBoxContainer";
import SkillsSpan from "./skillbox/SkillsSpan";
import SkillBoxTextContainer from "./skillbox/SkillBoxTextContainer";
import SkillBoxTitle from "./skillbox/SkillBoxTitle";
import SkillBoxText from "./skillbox/SkillBoxText";
import SkillsList from "./skillbox/SkillsList";
import SkillsImage from "./skillbox/SkillsImage";
import styled from "styled-components";

const SkillBox = ({ title, description, skills, image }) => {

    return (
        <SkillBoxContainer>
            <SkillBoxTextContainer>
                <SkillsImage src={image} alt={title} />
                {/*<SkillsImage src={WebDevelopment} alt="Github. Source: https://www.svgrepo.com/svg/382780/application-coding-web-code-write" />*/}
                <SkillBoxTitle>{title}</SkillBoxTitle>
                <SkillBoxText>{description}</SkillBoxText>
            </SkillBoxTextContainer>
            <SkillsSpan>
                <span>
                    <SkillsList>
                        {skills.map((item, index) => (
                             <li key={index}>{item}</li>
                        ))}
                    </SkillsList>
                </span>
            </SkillsSpan>
        </SkillBoxContainer>
    );
};

export default SkillBox;

const SourceLink = styled.a`
    display: block;
    margin-top: 0.5em;
    font-size: 0.8em;
    color: #007bff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;