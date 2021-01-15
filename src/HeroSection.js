
import React from 'react';
import bg from './images/bg1-ofc-empty-LQ.png'; 
import {HeroContainer, HeroBg, HeroBgImage} from './Components/HeroSectionElements.js'

const HeroSection = () => {
    return (
        
            <HeroContainer>
                <HeroBg>
                    <HeroBgImage src={bg} alt="background" />

                </HeroBg>



            </HeroContainer>


            
       
    )
}

export default HeroSection
