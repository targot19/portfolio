import styled from 'styled-components';
import React from 'react';
import Translator from './Translator';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t } = useTranslation();

    return (
        <NavBarContainer>
            <NavLinks>
                <NavItem href="#introduction">{t("navigation.about")}</NavItem>
                <NavItem href="#education">{t("navigation.education")}</NavItem>
                <NavItem href="#skillset">{t("navigation.skillset")}</NavItem>
                <NavItem href="#recommendations">{t("navigation.recommendations")}</NavItem>
                <NavItem href="#contact">{t("navigation.contact")}</NavItem>
            </NavLinks>
            <TranslatorWrapper>
                <Translator />
            </TranslatorWrapper>
        </NavBarContainer>
    );
};

export default NavBar;
export { NavBarContainer, NavLinks, NavItem, NavBar };

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 10em;
    letter-spacing: 0.02em;
    background-color: transparent;
    max-width: 100vw;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;

const NavLinks = styled.div`
    display: flex;
    margin-left: auto;
`;

const NavItem = styled.a`
    color: black;
    text-decoration: none;
    font-weight: bold;
    padding: 1em;
    font-size: 1.2em;
    &:hover {
        text-decoration: underline;
        color: black;
        font-weight: bold;
    }
`;

const TranslatorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;