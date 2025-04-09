import { Box3 } from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { ContentWrapper1 } from "../components/ContentWrapper";
import { useTranslation } from "react-i18next";
import SkillBox from "../components/SkillBox";
import styled from "styled-components";
import FrontEnd from "../assets/frontend.svg";
import BackEnd from "../assets/backend.svg";
import ProjectManagement from "../assets/project.svg";
import OtherSkills from "../assets/softskills.svg";

const Skillset = () => {
    const { t } = useTranslation();

    const frontEndSkills = t("skillbox.frontend-skills", { returnObjects: true }) || [];
    const backEndSkills = t("skillbox.backend-skills", { returnObjects: true }) || [];
    const Management = t("skillbox.management-skills", { returnObjects: true }) || [];
    const otherSkills = t("skillbox.other-skills", { returnObjects: true }) || [];

    return (
        <Box3 id="skillset">
                <SkillBoxGrid>
                    <SkillBox
                        title={t("skillbox.frontend")}
                        description={t("skillbox.frontend-description")}
                        skills={frontEndSkills}
                        image={FrontEnd}
                        //source: https://www.svgrepo.com/svg/16272/programming-code
                    />
                    <SkillBox
                        title={t("skillbox.backend")}
                        description={t("skillbox.backend-description")}
                        skills={backEndSkills}
                        image={BackEnd}
                        // source: https://www.svgrepo.com/svg/1699/web-development
                    />
                    <SkillBox
                        title={t("skillbox.management")}
                        description={t("skillbox.management-description")}
                        skills={Management}
                        image={ProjectManagement}
                        // source: https://www.svgrepo.com/svg/226785/dart-board
                        
                    />
                    <SkillBox
                        title={t("skillbox.other")}
                        description={t("skillbox.other-description")}
                        skills={otherSkills}
                        image={OtherSkills}
                        // source: https://www.svgrepo.com/svg/226720/collaboration
                        
                    />
                </SkillBoxGrid>
                <SectionTitle>{t("skillset")}</SectionTitle>
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