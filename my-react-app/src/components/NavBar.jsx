import styled from 'styled-components';
import React from 'react';

const NavBar = () => {
    return (
        <NavBarContainer>
            <NavTitle href="/">Portfolio</NavTitle>
            <NavLinks>
                <NavItem href="/Resume">Resume</NavItem>
                <NavItem href="/Projects">Projects</NavItem>
                <NavItem href="/Contact">Contact</NavItem>
            </NavLinks>
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