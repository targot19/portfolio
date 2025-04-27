import styled, { createGlobalStyle } from "styled-components";
import { Box1 } from "../components/SectionContainer";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import { ContentWrapper1 } from "../components/ContentWrapper";

const Upcoming = () => {
    const { t } = useTranslation();
    const upcomingSkills = ["Typescript", "Next.js", "Vue", ".NET", "Power BI", "Kubernetes"]

    return (
        <>
        <GlobalKeyframes />
            <Box1 id="upcoming">
                <ContentWrapper1>
                    <SectionTitle>{t("navigation.upcoming")}</SectionTitle>
                    <Slider>
                        <SliderBox>
                            <Text>
                                {upcomingSkills.map((skill, index) => (
                                    <span key={index}>
                                        {skill}
                                        {index < upcomingSkills.length - 1 ? ", " : ""}
                                    </span>
                                ))}
                            </Text>
                        </SliderBox>
                    </Slider>
                </ContentWrapper1>
            </Box1>
        </>
    );
};

export default Upcoming;

// Styled Components

const Slider = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 82px;
    overflow: hidden;
    width: 50%;
    //border: 2px solid red;
`;

const SliderBox = styled.div`
    position: absolute;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: move-right-to-left 12.5s linear infinite;
`;

const Text = styled.div`
    white-space: nowrap;
    font-size: 1.5rem;

    @media (max-width: 1024px) {
        font-size: 1.4rem;
    }

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 420px) {
        font-size: 1.2rem;
    }
`;

const GlobalKeyframes = createGlobalStyle`
    @keyframes move-right-to-left {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;