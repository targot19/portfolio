import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import ContentWrapper from "../components/ContentWrapper";
import VerticalWrapper from "../components/VerticalWrapper";
import { useTranslation } from "react-i18next";
import HorizontalWrapper from "../components/HorizontalWrapper";
import SkillBox from "../components/SkillBox";

const Skillset = () => {
    const { t } = useTranslation();

    // Fetch arrays from translations with fallback
    const programmingSkills = t("skillset.programming", { returnObjects: true }) || [];
    const toolboxSkills = t("skillset.toolbox", { returnObjects: true }) || [];
    const languages = t("skillset.languages", { returnObjects: true }) || [];

    return (
        <SectionContainer id="skillset">
            <ContentWrapper>
                <SkillBox />
                <SectionTitle>{t("skillset.title")}</SectionTitle>
                <VerticalWrapper>
                    <div>
                        <h3>Programming</h3>
                        <ul>
                            {programmingSkills.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Toolbox</h3>
                        <ul>
                            {toolboxSkills.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Languages</h3>
                        <ul>
                            {languages.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </VerticalWrapper>
            </ContentWrapper>
        </SectionContainer>
    );
};

export default Skillset;