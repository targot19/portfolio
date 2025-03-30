import React from "react";
import SectionContainer from "../components/SectionContainer";
import ContentWrapper from "../components/ContentWrapper";
import HorizontalWrapper from "../components/HorizontalWrapper";
import styled from "styled-components";
import Profile from "../assets/Profile.jpg";
import SectionTitle from "../components/SectionTitle.jsx";
import { useTranslation } from "react-i18next";

const Introduction = () => {
    const { t, i18n } = useTranslation();
    console.log("Current language:", i18n.language);
    console.log("Translation for 'introduction.title':", t("introduction.title"));

    return (
        <SectionContainer>
             <ProfilePic src={Profile} alt="Profile picture" />
             <ContentWrapper>
                 <SectionTitle>{t("introduction.title")}</SectionTitle>
                 <HorizontalWrapper>
                    <IntroText>Hi</IntroText>
                 </HorizontalWrapper>
             </ContentWrapper>
         </SectionContainer>
    );
}

export default Introduction;
 
 const ProfilePic = styled.img`
     overflow: visible;
     width: 25%;
     height: 25%;
     object-fit: cover;
     border: 2px dotted red;
 
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