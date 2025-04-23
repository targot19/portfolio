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
                <NavItem href="#skills">{t("navigation.skills")}</NavItem>
                <NavItem href="#projects">{t("navigation.projects")}</NavItem>
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
    padding: 1rem 1rem;
    letter-spacing: 0.02em;
    background-color: #81B29A;
    max-width: 100%;
    width: calc(100% - 10px);
    position: absolute;
    //border: 2px dotted blue;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;
`;

const NavLinks = styled.div`
    display: flex;
    margin-left: auto;
`;

const NavItem = styled.a`
    color: black;
    text-decoration: none;
    font-weight: normal;
    padding: 0.5rem;
    font-size: 1.2rem;
    //border: 2px dotted blue;
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
    padding-left: 0.5rem;
`;