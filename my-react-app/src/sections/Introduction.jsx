import React from "react";
import { Box1 } from "../components/SectionContainer";
import ContentWrapper from "../components/ContentWrapper";
import HorizontalWrapper from "../components/HorizontalWrapper";
import styled from "styled-components";
import Profile from "../assets/Profile.jpg";
import { SectionTitleIntro } from "../components/SectionTitle.jsx";
import { useTranslation } from "react-i18next";
import DownloadResume from "../components/DownloadResume.jsx";
import GithubButton from "../components/GithubButton.jsx";

const Introduction = () => {
    const { t } = useTranslation();

    return (
        <Box1 id="introduction">
             <ContentWrapper>
                 <SectionTitleIntro>{t("introduction.title")}</SectionTitleIntro>
                 <HorizontalWrapper>
                    <IntroText>{t("introduction.description")}</IntroText>
                 </HorizontalWrapper>
                 <HorizontalWrapper>
                    <GithubButton />
                    <DownloadResume />
                 </HorizontalWrapper>
             </ContentWrapper>
             <ProfilePic src={Profile} alt="Profile picture" />
         </Box1>
    );
}

export default Introduction;
 
 const ProfilePic = styled.img`
     overflow: hidden;
     width: 25em;
     height: 25em;
     object-fit: cover;
     border: 2px dotted red;
     border-radius: 75%;
 
     &:hover {
     transform: scale(1.05);
     transition: all .35s linear;
     }
 `

 const IntroText = styled.p`
    color: black;
    font-size: large;
    place-content: center;
`