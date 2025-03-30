import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { SectionTitleWrapper3 } from "../components/SectionTitleWrapper";
import ContentWrapper from "../components/ContentWrapper";
import HorizontalWrapper from "../components/HorizontalWrapper";
import { useTranslation } from "react-i18next";

const Skillset = () => {
    const { t } = useTranslation();

    return (
        <SectionContainer>
            <SectionTitleWrapper3>
                <SectionTitle>Skillset</SectionTitle>
            </SectionTitleWrapper3>
            <ContentWrapper>
                <HorizontalWrapper>
                    <p>{t("skillset.IDE")}</p>
                </HorizontalWrapper>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Skillset;