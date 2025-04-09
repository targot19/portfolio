import { Box3 } from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { ContentWrapper1 } from "../components/ContentWrapper";
import { useTranslation } from "react-i18next";
import SkillBox from "../components/SkillBox";
import styled from "styled-components";
import WebDevelopment from "../assets/web-development.svg";

const Skillset = () => {
    const { t } = useTranslation();

    const frontEndSkills = t("skillbox.web-skills", { returnObjects: true }) || [];
    const backEndSkills = t("skillbox.mobile-skills", { returnObjects: true }) || [];

    return (
        <Box3 id="skillset">
                <SkillBoxGrid>
                    <SkillBox
                        title={t("skillbox.web")}
                        description={t("skillbox.web-description")}
                        skills={frontEndSkills}
                        image={WebDevelopment} // Optional custom image
                        //source="https://www.svgrepo.com/svg/382780/application-coding-web-code-write"
                    />
                    <SkillBox
                        title={t("skillbox.mobile")}
                        description={t("skillbox.mobile-description")}
                        skills={backEndSkills}
                        image={WebDevelopment} // Optional custom image
                    />
                    <SkillBox
                        title="Other Skills"
                        description="Some other skills I have."
                        skills={["Skill 1", "Skill 2", "Skill 3"]}
                        
                    />
                    <SkillBox
                        title="Languages"
                        description="Languages I speak."
                        skills={t("skillset.languages", { returnObjects: true }) || []}
                        
                    />
                </SkillBoxGrid>
                <SectionTitle>{t("skillset.title")}</SectionTitle>
        </Box3>
    );
};

export default Skillset;

const SkillBoxGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid red;
    padding: 0;
    margin: 0;
    max-width: 75vw;
`;