import React from "react";
import styled from "styled-components";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <FooterSection>
            <FooterText>© {year} by Tania Argot</FooterText>
        </FooterSection>
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
  background-color: #efefef;
`;

const FooterText = styled.p`
    color: black;
    font-weight: 1px;
`;