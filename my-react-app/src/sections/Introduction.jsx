import React from "react";
import SectionContainer from "../components/SectionContainer";
import ContentWrapper from "../components/ContentWrapper";
import HorizontalWrapper from "../components/HorizontalWrapper";
import styled from "styled-components";
import Profile from "../assets/Profile.jpg";
import SectionTitle from "../components/SectionTitle.jsx";

const Introduction = () => {
    return (
        <SectionContainer>
             <ProfilePic src={Profile} alt="Profile picture" />
             <ContentWrapper>
                 <SectionTitle>Portfolio of Tania Argot</SectionTitle>
                 <HorizontalWrapper>
                     <p>
                         edofe
                     </p>
                 </HorizontalWrapper>
             </ContentWrapper>
         </SectionContainer>
    );
}

export default Introduction;
 
 const ProfilePic = styled.img`
     //visibility: hidden;
     overflow: hidden;
     width: 25%;
     height: 25%;
     object-fit: cover;
     border: 2px dotted red;
 
     &:hover {
     transform: scale(1.05);
     transition: all .35s linear;
     }
 `