import styled from 'styled-components';
import React from 'react';
import Translator from './Translator';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t } = useTranslation();

    return (
        <NavBarContainer>
            <NavTitle href="/">{t("navigation.portfolio")}</NavTitle>
            <NavLinks>
                <NavItem href="/Resume">{t("navigation.resume")}</NavItem>
                <NavItem href="/Projects">{t("navigation.projects")}</NavItem>
                <NavItem href="/Contact">{t("navigation.contact")}</NavItem>
            </NavLinks>
            <TranslatorWrapper>
                <Translator />
            </TranslatorWrapper>
        </NavBarContainer>
    );
};

export default NavBar;
export { NavBarContainer, NavLinks, NavTitle, NavItem, NavBar };

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #efefef;
    width: 100vw;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 20px;
`;

const NavTitle = styled.a`
    color: #6d6d6d;
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        background-color: #ececec;
        border-radius: 2px;
    }
`;

const NavItem = styled.a`
    color: #6d6d6d;
    justify-content: flex-end;
    text-decoration: none;
    padding: 10px 15px;
    &:hover {
        background-color: #ececec;
        border-radius: 2px;
    }
`;

const TranslatorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;