
import React from 'react';
import bg from './images/Bg-new-1.svg'; 
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
