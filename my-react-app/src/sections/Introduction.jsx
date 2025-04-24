import React, { useState, useEffect } from "react";
import { IntroSection } from "../components/SectionContainer";
import { IntroWrapper } from "../components/ContentWrapper";
import { IntroWrapperHorizon } from "../components/HorizontalWrapper";
import styled from "styled-components";
import Profile from "../assets/Profile.jpg";
import { useTranslation } from "react-i18next";
import DownloadResume from "../components/DownloadResume.jsx";
import GithubButton from "../components/GithubButton.jsx";
import { TypeAnimation } from "react-type-animation";
import BackgroundVideo from "../assets/bg-video4.mp4";
import Resume from "../assets/resume.svg";

const Introduction = () => {
    const { t, i18n } = useTranslation();
    const [title, setTitle] = useState("");

    // Update the title whenever the language changes
    useEffect(() => {
        const translatedTitle = t("introduction.title", { defaultValue: "Meet Tania" });
        setTitle(translatedTitle);
    }, [t, i18n.language]);

    const handleOnClick = () => {
        window.open('https://github.com/targot19', '_blank');
    };

    const downloadFile = () => {
        if (i18n.language === "en") {
            window.open('/src/assets/EN-CV.pdf', '_blank');
        } else if (i18n.language === "da") {
            window.open('/src/assets/DA-CV.pdf', '_blank');
        }
    };

    const handleVideoPlay = (event) => {
        const video = event.target;
        video.playbackRate = 0.5; // Set playback rate to 50% (slower)
    };

    return (
        <IntroSection id="introduction">
            {/*<VideoBackground
                autoPlay
                loop
                muted
                onPlay={handleVideoPlay}
            >
                <source src={BackgroundVideo} type="video/mp4" alt="Video by Miguel Á. Padriñán from Pexels: https://www.pexels.com/video/interchanging-light-bokeh-1795912/" />
            </VideoBackground>*/}
            <IntroWrapper>
            {title && (
                    <TypeAnimation
                        key={title}
                        sequence={[
                            1000,
                            title,
                            1000,
                        ]}
                        wrapper="span"
                        speed={5}
                        style={{ fontSize: "3rem", display: "inline-block", fontWeight: "bold" }}
                        repeat={Infinity}
                    />
                )}
                <IntroWrapperHorizon>
                    <IntroText>{t("introduction.description")}</IntroText>
                </IntroWrapperHorizon>
                <IntroWrapperHorizon>
                    <StyledButton>
                        <a onClick={handleOnClick}>
                            {t("download.github")}
                        </a>
                    </StyledButton>
                    <StyledButton>
                        <a onClick={downloadFile}>
                            {t("download.resume")}
                        </a>
                    </StyledButton>
                </IntroWrapperHorizon>
            </IntroWrapper>
        </IntroSection>
    );
};

export default Introduction;

const VideoBackground = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 0; /* Place the video behind the content */
`;

const IntroText = styled.p`
    color: black;
    font-size: 1.5rem;
    padding-right: 1rem;
    place-content: center;
    font-family: "Verdana", sans-serif;
`;

const StyledButton = styled.button`
    background-color: #3D405B;
    border-radius: 5px;
    justify-content: space-evenly;
    border: none;
    transition: border 0.3s ease-in-out;
    //font-family: "Poppins", serif;
    font-weight: bold;
    padding: 0.2rem 0.8rem;
    width: 8rem;
    height: 3rem;
    font-size: 1.2rem;

    .a {
        all: unset;}

    &:hover {
        border-bottom: 5px solid #81B29A;
        border-left: 4px solid #81B29A;
        //border-top: 4px solid #81B29A;
        //border-right: 4px solid #81B29A;
    }
}`;