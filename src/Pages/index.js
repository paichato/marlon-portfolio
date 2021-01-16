import React, {useState} from 'react';
import { Button, Button2, CodeIcon, CodeIconContainer, MiniText, Text } from '../Components/ButtonElement';
import { HeroBtnContainer, ArrowForward, ArrowRight } from '../Components/HeroSectionElements';
import HeroSection from '../HeroSection';
import { NavC } from '../NavC';
import {Sidebar} from '../Sidebar';



function Home() {

    const [hover, setHover]= useState(false);
    const onHover=()=>{
        setHover(!hover)
    }
    const[isOpen, setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
  

    
    return (
        <div >
            {/* <NavC  toggle={toggle}/> */}
            <Sidebar isOpen={isOpen} toggle={toggle} />
            
            <Button to='About' onMouseEnter={onHover} onMouseLeave={onHover} 
            smooth={true} duration={500} spy={true}
             exact="true" offset={-80}>see more
                {hover ? <ArrowForward /> : <ArrowRight/>}
                
                </Button>
               
                <CodeIconContainer>
                <CodeIcon/>

                </CodeIconContainer>
               
                <Text>Marlon<br/> D'Jesus</Text>
                <MiniText>Software Dev | Front-End | Back-end</MiniText>
            <HeroSection id="Home">
                {/* <HeroBtnContainer>
                <Button to='Projects' onMouseEnter={onHover} onMouseLeave={onHover}>see projects 
                {hover ? <ArrowForward/> : <ArrowRight/>}</Button>

                </HeroBtnContainer> */}
                
            </HeroSection>
            
        </div>
    )
}

export default Home;