import React, { useState, useEffect } from "react";
import { Box1 } from "../components/SectionContainer";
import ContentWrapper from "../components/ContentWrapper";
import HorizontalWrapper from "../components/HorizontalWrapper";
import styled from "styled-components";
import Profile from "../assets/Profile.jpg";
import { useTranslation } from "react-i18next";
import DownloadResume from "../components/DownloadResume.jsx";
import GithubButton from "../components/GithubButton.jsx";
import { TypeAnimation } from "react-type-animation";
import BackgroundVideo from "../assets/bg-video2.mp4";

const Introduction = () => {
    const { t, i18n } = useTranslation();
    const [title, setTitle] = useState("");

    // Update the title whenever the language changes
    useEffect(() => {
        const translatedTitle = t("introduction.title", { defaultValue: "Meet Tania" });
        setTitle(translatedTitle);
    }, [t, i18n.language]);

    const handleVideoPlay = (event) => {
        const video = event.target;
        video.playbackRate = 0.5; // Set playback rate to 50% (slower)
    };

    return (
        <IntroSection id="introduction">
            <VideoBackground
                autoPlay
                loop
                muted
                onPlay={handleVideoPlay}
            >
                <source src={BackgroundVideo} type="video/mp4" />
            </VideoBackground>
            <ContentWrapper>
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
                        style={{ fontSize: "2em", display: "inline-block", fontWeight: "bold" }}
                        repeat={Infinity}
                    />
                )}
                <HorizontalWrapper>
                    <IntroText>{t("introduction.description")}</IntroText>
                </HorizontalWrapper>
                <HorizontalWrapper>
                    <GithubButton />
                    <DownloadResume />
                </HorizontalWrapper>
            </ContentWrapper>
            <ProfilePic src={Profile} alt="Profile picture" />
        </IntroSection>
    );
};

export default Introduction;

const IntroSection = styled.section`
    position: relative; /* Create a stacking context */
    display: flex;
     width: 100vw;
     max-width: 100vw;
     height: 100vh;
     justify-content: center;
     align-items: center;
     align-self: center;
     //border: 2px solid black;
     padding: 0; /* Remove padding */
    margin: 0; /* Remove margin */
     overflow: hidden;
     background-size: cover;
    `

const VideoBackground = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 0; /* Place the video behind the content */
`;

const ProfilePic = styled.img`
    overflow: hidden;
    width: 25em;
    height: 25em;
    object-fit: cover;
    border-radius: 75%;
    z-index: 1;

    &:hover {
        transform: scale(1.05);
        transition: all 0.35s linear;
    }
`;

const IntroText = styled.p`
    color: black;
    font-size: large;
    place-content: center;
`;