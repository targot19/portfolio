import React from "react";
import styled from "styled-components";
import PageContainer from "./PageContainer";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <PageContainer>
             <FooterSection>
                 <p>
                     <small>All Rights Reserved © {year} Tania Argot</small>
                 </p>
             </FooterSection>
         </PageContainer>
    );
};

export default Footer;

const FooterSection = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5%;
  width: 100%;
  background-color:rgb(74, 44, 44);
`;