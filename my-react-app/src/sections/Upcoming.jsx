import styled, { createGlobalStyle } from "styled-components";
import { Box1 } from "../components/SectionContainer";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import { ContentWrapper1 } from "../components/ContentWrapper";

const Upcoming = () => {
    const upcomingSkills = ["Typescript", "Next.js", "Vue", ".NET"]

    return (
        <>
        <GlobalKeyframes />
        <Box1 id="upcoming">
            <ContentWrapper1>
                <SectionTitle>Upcoming</SectionTitle>
                <Slider>
                    <Dunno>
                        <Text>
                            {upcomingSkills.map((skill, index) => (
                                <span key={index}>
                                    {skill}
                                    {index < upcomingSkills.length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </Text>
                    </Dunno>
                </Slider>
            </ContentWrapper1>
        </Box1>
        </>
    );
};

export default Upcoming;

// Styled Components

const Slider = styled.div`
    position: relative;
    min-height: 82px;
    overflow: hidden;
    width: 100%;
`;

const Text = styled.div`
    white-space: nowrap;
    font-size: 1.5rem;
`;

const Dunno = styled.div`
    position: absolute;
    display: inline-block;
    white-space: nowrap;
    animation: move-right-to-left 8.5s linear infinite;
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