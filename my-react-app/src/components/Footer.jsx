import React from "react";
import styled from "styled-components";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <FooterSection>
            <p><small>© {year} by Tania Argot</small></p>
        </FooterSection>
    );
};

export default Footer;

const FooterSection = styled.div`
  display: flex;
  font-color: #6d6d6d;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5%;
  width: 100%;
  background-color: #b4b4b4;
`;