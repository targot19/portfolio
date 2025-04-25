import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Translator from './Translator';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100; // Adjust for navbar height
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id");
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <NavBarContainer>
            <NavLinks isMenuOpen={isMenuOpen}>
                <NavItem href="#education" className={activeSection === "education" ? "active" : ""}>
                    {t("navigation.education")}
                </NavItem>
                <NavItem href="#projects" className={activeSection === "projects" ? "active" : ""}>
                    {t("navigation.projects")}
                </NavItem>
                <NavItem href="#upcoming" className={activeSection === "upcoming" ? "active" : ""}>
                    {t("navigation.upcoming")}
                </NavItem>
                <NavItem href="#skills" className={activeSection === "skills" ? "active" : ""}>
                    {t("navigation.skills")}
                </NavItem>
                <NavItem href="#recommendations" className={activeSection === "recommendations" ? "active" : ""}>
                    {t("navigation.recommendations")}
                </NavItem>
                <NavItem href="#contact" className={activeSection === "contact" ? "active" : ""}>
                    {t("navigation.contact")}
                </NavItem>
            </NavLinks>
            <RightContainer>
                <TranslatorWrapper>
                    <Translator />
                </TranslatorWrapper>
                <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </HamburgerMenu>
            </RightContainer>
        </NavBarContainer>
    );
};

export default NavBar;

const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    background-color: #81B29A;
    position: sticky;
    top: 0;
    z-index: 10;
    height: 4rem;

    @media (max-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const NavLinks = styled.div`
    display: flex;
    margin-left: auto;
    justify-content: flex-end;
    margin-left: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 4rem;
        left: 0;
        right: 0;
        background-color: #81B29A;
        display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    }
`;

const NavItem = styled.a`
    color: #F4F1DE;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem;
    font-size: 1.2rem;

    &:hover {
        color: #E07A5F;
    }

    &.active {
        color: #E07A5F;
    }

    @media (max-width: 1600px) {
        font-size: 1.3rem;
        padding: 0.8rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.2rem;
        padding: 0.5rem;
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
        padding: 0.4rem;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
        padding: 0.3rem;
    }
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
`;

const HamburgerMenu = styled.div`
    display: none;
    font-size: 2rem;
    cursor: pointer;
    color: #F4F1DE;

    @media (max-width: 768px) {
        display: block;
        z-index: 10;
        justify-content: flex-end;
    }

    @media (max-width: 420px) {
        display: block;
        z-index: 10;
    }
`;

const TranslatorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0.5rem;
`;