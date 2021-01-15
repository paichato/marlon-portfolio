import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './Components/SidebarElements.js';

export function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="About" onClick={toggle} smooth={true} duration={500} spy={true}
             exact="true" offset={-80}>About</SidebarLink>
                    <SidebarLink to="Projects" onClick={toggle} smooth={true} duration={500} spy={true}
             exact="true" offset={-80}>Projects</SidebarLink>
                    <SidebarLink to="Hire" onClick={toggle} smooth={true} duration={500} spy={true}
             exact="true" offset={-80}>Hire</SidebarLink>

                </SidebarMenu>

            </SidebarWrapper>

        </SidebarContainer>
    )
}


