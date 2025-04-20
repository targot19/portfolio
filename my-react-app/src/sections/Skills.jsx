import { Box3 } from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { ContentWrapper2 } from "../components/ContentWrapper";
import { useTranslation } from "react-i18next";
import SkillBox from "../components/SkillBox";
import styled from "styled-components";
import FrontEnd from "../assets/frontend.svg"; //source: https://www.svgrepo.com/svg/16272/programming-code
import BackEnd from "../assets/backend.svg"; // source: https://www.svgrepo.com/svg/1699/web-development
import ProjectManagement from "../assets/project.svg"; // source: https://www.svgrepo.com/svg/226785/dart-board
import OtherSkills from "../assets/softskills.svg"; // source: https://www.svgrepo.com/svg/226720/collaboration

{/* I strive to build practical, navigateable, and user-engaging technology with a little touch of animation. */}

const Skills = () => {
    const { t } = useTranslation();
    const SkillboxList = t("skillboxList", { returnObjects: true });
    
    return (
        <Box3 id="skills">
            <ContentWrapper2>
            <SectionTitle>{t("skillset")}</SectionTitle>
                <SkillBoxGrid>
                    {SkillboxList.map((skill, index) => (
                        <SkillBox
                            key={index}
                            title={skill.title}
                            description={skill.description}
                            skills={skill.skills}
                            image={skill.image}
                        />
                    ))}
                </SkillBoxGrid>
            </ContentWrapper2>
        </Box3>
    );
};

export default Skills;

const SkillBoxGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
    justify-content: center;
    align-items: center;
    //border: 2px solid red;
    padding: 0;
    margin: 0;
    max-width: 100%;
`