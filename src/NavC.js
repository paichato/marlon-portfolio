import React from 'react';
import {FaBars} from 'react-icons/fa';
import {MobileIcon, Nav, NavContainer, NavItem, NavLinks, NavLogo, NavMenu, } from './Components/NavElements.js';

export function NavC({toggle}) {
    return (
        <>
          
            <Nav>
        <NavContainer>
          <NavLogo href="./Pages/index.js" to="Home" smooth={true} duration={500} spy={true}
             exact="true" offset={-80}>MDJ</NavLogo>
          <MobileIcon  onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks activeClass="active" to="About" className="About" smooth={true} duration={500} spy={true}
             exact="true" offset={-80}>About</NavLinks>
              <NavLinks activeClass="active" to="Projects" smooth={true} duration={500} spy={true}
             exact="true" offset={-80}>Projects</NavLinks>
              <NavLinks activeClass="active" to="Hire" smooth={true} duration={500} spy={true}
             exact="true" offset={-80}>Hire</NavLinks>
              <NavLinks to="About"></NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
     
      
        </>
    )
}






