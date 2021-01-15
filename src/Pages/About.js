
import {React, useState} from 'react';
import bg2 from '../images/bg3.png'; 
import {HeroContainer, HeroBg, HeroBgImage} from '../Components/HeroSectionElements.js'
// import { Button } from '../Components/ButtonElement';
import {AboutContainer, IconsContainer, IconX, Description, Button, ButtonWrapper, IconX2, IconX3, IconX4} from '../Components/AboutElements';
import {ArrowForward, ArrowRight} from '../Components/HeroSectionElements';



const About = () => {

    

    const [hover, setHover]= useState(false);
    const onHover=()=>{
        setHover(!hover)
    }

    const[isOpen, setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
    return (
        <div id="About" className="About">
        
            <HeroContainer  smooth={true} duration={500} spy={true} exact="true" offset={-80} >
                <HeroBg>
                    <HeroBgImage src={bg2} alt="background" />

                </HeroBg>
                <AboutContainer>
                    <IconsContainer>
                        <IconX/>
                        <IconX2/>
                        <IconX3/>
                        <IconX4/>

                    </IconsContainer>
                    <Description>I have worked on a local startup team as 
                        front-end developer for one year and worked on several
                         MERN solo projects. I am mostly a self taught and 
                         skillful,  ready to  help create and maintain new 
                         features and functionality for your suite of web 
                         applications and native apps. Build, implement, test,
                          deploy, report, document, discuss. IM READY!<br/>
                          <br/>

<b>MY GOAL FOR 2021 IS TO MASTER REACT.</b></Description>
            <ButtonWrapper>
             <Button to="Projects" onMouseEnter={onHover} onMouseLeave={onHover} 
             smooth={true} duration={500} spy={true}
             exact="true" offset={-80}>see projects
             {hover ? <ArrowForward /> : <ArrowRight/>}
             </Button>
            </ButtonWrapper>
                    

                </AboutContainer>


            </HeroContainer>


            
       </div>
    )
}

export default About
