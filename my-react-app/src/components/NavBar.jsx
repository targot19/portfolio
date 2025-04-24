import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Translator from './Translator';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState("");

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
            <NavLinks>
                
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
            <TranslatorWrapper>
                <Translator />
            </TranslatorWrapper>
        </NavBarContainer>
    );
};

export default NavBar;
export { NavBarContainer, NavLinks, NavItem, NavBar };

const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    letter-spacing: 0.02em;
    background-color: #81B29A;
    max-width: 100%;
    width: calc(100% - 10px);
    position: sticky;
    //border: 2px dotted blue;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;
    height: 4rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const NavLinks = styled.div`
    display: flex;
    margin-left: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const NavItem = styled.a`
    color: #F4F1DE;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem;
    font-size: 1.2rem;
    //border: 2px dotted blue;
    
    &:hover {
        //text-decoration: underline;
        color: #E07A5F;
        font-weight: bold;
    }

    &.active {
        color: #E07A5F; /* Highlight color for the active section */
        font-weight: bold;
        //text-decoration: underline;
    }
`;

const TranslatorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0.5rem;
`;