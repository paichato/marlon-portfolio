
import {React, useState} from 'react';
import bg2 from '../images/bg-new-2.svg'; 
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
                    <Description>
                        {/* I have worked on a local startup team as 
                        front-end developer for one year and worked on several
                         MERN solo projects. I am mostly a self taught and 
                         skillful,  ready to  help create and maintain new 
                         features and functionality for your suite of web 
                         applications and native apps. Build, implement, test,
                          deploy, report, document, discuss. IM READY! */}
                          I am passionate about programming since 2011.
In 2013 i took a degree course in Information Systems Technologies at USTM-Universidade Sao Tomas de Mocambique where i could learn:
Java, C#, HTML.<br/><br/> I dropped out of the course in the third year because i was not learning programming as such and i could not specialize in programming only in 
systems administration.<br/>In 2017 I decided to become a full-time photographer untill now. In 2019 I discovered bootcamps and React. In 2020 I realized what i wanted to for a living and for my life and that was Software Engineering.

                          <br/>
                          <br/>

<b>2021 im willing to master React and to apply to a job on a company where i can grow and aggregate value.</b></Description>
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
