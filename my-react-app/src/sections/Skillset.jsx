import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { SectionTitleWrapper3 } from "../components/SectionTitleWrapper";
import ContentWrapper from "../components/ContentWrapper";
import HorizontalWrapper from "../components/HorizontalWrapper";

const Skillset = () => {
    return (
        <SectionContainer>
            <SectionTitleWrapper3>
                <SectionTitle>Skillset</SectionTitle>
            </SectionTitleWrapper3>
            <ContentWrapper>
                <HorizontalWrapper>
                    <p>("introduction.title")</p>
                </HorizontalWrapper>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Skillset;