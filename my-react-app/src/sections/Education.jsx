import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { SectionTitleWrapper2 } from "../components/SectionTitleWrapper";
import ContentWrapper from "../components/ContentWrapper";
import HorizontalWrapper from "../components/HorizontalWrapper";

const Education = () => {
    return (
        <SectionContainer>
            <ContentWrapper>
                <HorizontalWrapper>
                    <p>("introduction.title")</p>
                </HorizontalWrapper>
            </ContentWrapper>
            <SectionTitleWrapper2>
                <SectionTitle>Education</SectionTitle>
            </SectionTitleWrapper2>
        </SectionContainer>
    )
}

export default Education;