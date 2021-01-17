import React, {useState} from 'react'
import { HeroBg, HeroBgImage, HeroContainer } from '../Components/HeroSectionElements'
import { ProjectsBoxContainer, ProjectsBoxDescription, ProjectsBoxGitIcon,
     ProjectsBoxGitIconContainer, ProjectsBoxIcon1, ProjectsBoxIcon2,
      ProjectsBoxIcon3, ProjectsBoxIconsContainer, ProjectsBoxText,
       ProjectsBoxTextContainer, ProjectsButton, ProjectsButtonContainer,
        ProjectsContainer, ProjectsIcon, ProjectsIconContainer, ProjectsMiniTitle,
         ProjectsModal1, ProjectsModalsContainer, ProjectsTitle, ProjectsModal2,
          ProjectsModal3  }

          from '../Components/ProjectsElements';
import {BigModal} from '../Components/BigModalElements.js';
import bg3 from '../images/Background-3-last.png';


function Projects() {
    const [showModal, setShowModal]=useState(false);
    const openModal = ()=>{
        setShowModal(prev=>!prev)
    }

    return (
            <>
            <HeroContainer id="Projects" smooth={true} duration={500} spy={true}
             exact="true" offset={-80} style={{zIndex: '997'}}>
                <HeroBg>
                   <HeroBgImage src={bg3} alt="background3" /> 
                </HeroBg>
        

                <ProjectsContainer>
                
                    <ProjectsTitle>MY PORTFOLIO</ProjectsTitle>
                    <ProjectsMiniTitle>Click on one of the projects 
                        that i have been workin on lately.</ProjectsMiniTitle>
                        <ProjectsButtonContainer >
                        <ProjectsButton to="Hire" smooth={true} duration={1000}
                         spy={true} exact="true" offset={-80} >Hire now</ProjectsButton>
                        </ProjectsButtonContainer>
                        
                        <BigModal showModal={showModal} setShowModal={setShowModal}></BigModal>
                    <ProjectsModalsContainer>

                        <ProjectsModal1 onClick={openModal}>

                            <ProjectsIconContainer>
                                <ProjectsIcon></ProjectsIcon>
                            </ProjectsIconContainer>
                            <ProjectsBoxContainer>
                                <ProjectsBoxIconsContainer>
                                    <ProjectsBoxIcon1/>
                                    <ProjectsBoxIcon2/>
                                    <ProjectsBoxIcon3/>
                                </ProjectsBoxIconsContainer>
                                <ProjectsBoxTextContainer>
                                <ProjectsBoxText>Dognate</ProjectsBoxText>
                                <ProjectsBoxDescription>
                                    An app that 
                                    users can find dogs 
                                    to adopt and give to 
                                    adoption.
                                    </ProjectsBoxDescription>
                                </ProjectsBoxTextContainer>
                                <ProjectsBoxGitIconContainer>
                                    <ProjectsBoxGitIcon></ProjectsBoxGitIcon>
                                </ProjectsBoxGitIconContainer>
                                
                            </ProjectsBoxContainer>
                        </ProjectsModal1>
                        <ProjectsModal2>
                            <ProjectsIconContainer>
                                <ProjectsIcon></ProjectsIcon>
                            </ProjectsIconContainer>
                            <ProjectsBoxContainer>
                                <ProjectsBoxIconsContainer>
                                    <ProjectsBoxIcon1/>
                                    <ProjectsBoxIcon2/>
                                    <ProjectsBoxIcon3/>
                                </ProjectsBoxIconsContainer>
                                <ProjectsBoxTextContainer>
                                <ProjectsBoxText>Dognate</ProjectsBoxText>
                                <ProjectsBoxDescription>
                                    An app that 
                                    users can find dogs 
                                    to adopt and give to 
                                    adoption.
                                    </ProjectsBoxDescription>
                                </ProjectsBoxTextContainer>
                                <ProjectsBoxGitIconContainer>
                                    <ProjectsBoxGitIcon></ProjectsBoxGitIcon>
                                </ProjectsBoxGitIconContainer>
                                
                            </ProjectsBoxContainer>
                        </ProjectsModal2>
                        <ProjectsModal3>
                            <ProjectsIconContainer>
                                <ProjectsIcon></ProjectsIcon>
                            </ProjectsIconContainer>
                            <ProjectsBoxContainer>
                                <ProjectsBoxIconsContainer>
                                    <ProjectsBoxIcon1/>
                                    <ProjectsBoxIcon2/>
                                    <ProjectsBoxIcon3/>
                                </ProjectsBoxIconsContainer>
                                <ProjectsBoxTextContainer>
                                <ProjectsBoxText>Affiliate</ProjectsBoxText>
                                <ProjectsBoxDescription >
                                    An app that 
                                    users can find dogs 
                                    to adopt and give to 
                                    adoption.
                                    </ProjectsBoxDescription>
                                </ProjectsBoxTextContainer>
                                <ProjectsBoxGitIconContainer>
                                    <ProjectsBoxGitIcon></ProjectsBoxGitIcon>
                                </ProjectsBoxGitIconContainer>
                                
                            </ProjectsBoxContainer>
                        </ProjectsModal3>

                    </ProjectsModalsContainer>


                </ProjectsContainer>
                </HeroContainer>

               

            
        </>
    )
}

export default Projects
