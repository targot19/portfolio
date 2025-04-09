import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Footer = () => {
    const { t } = useTranslation();
    const today = new Date();
    const year = today.getFullYear();

    return (
        <FooterSection>
            <FooterText>© {year} {t("footer.copyright")}</FooterText>
        </FooterSection>
    );
};

export default Footer;

const FooterSection = styled.div`
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 100vw;
  max-width: 100vw;
  background-color: transparent;
`;

const FooterText = styled.p`
    color: black;
    font-weight: 1px;
`;