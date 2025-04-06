import styled from 'styled-components';
import React from 'react';
import Translator from './Translator';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t } = useTranslation();

    return (
        <NavBarContainer>
            <NavLinks>
                <NavItem href="#introduction">{t("navigation.introduction")}</NavItem>
                <NavItem href="#education">{t("navigation.education")}</NavItem>
                <NavItem href="/Resume">{t("navigation.resume")}</NavItem>
                <NavItem href="/Projects">{t("navigation.projects")}</NavItem>
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
    background-color: #efefef;
    width: 100vw;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;

const NavLinks = styled.div`
    display: flex;
    margin-left: auto;
`;

const NavItem = styled.a`
    color: #6d6d6d;
    text-decoration: none;
    padding: 1em;
    font-size: 1.2em;
    &:hover {
        text-decoration: underline;
    }
`;

const TranslatorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;