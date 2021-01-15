import React from 'react';
import { HeroBg, HeroBgImage, HeroContainer } from '../Components/HeroSectionElements';
import { HireCard1, HireCard1C, HireCard1CLabel, HireCard1IconContainer,
     HireCard2, HireCard2ButtonContainer, HireCard2C, HireCard2InputEmail,
      HireCard2InputEmailLabel, HireCard2InputMessage, HireCard2InputMessageLabel,
       HireCard2InputsContainer, HireCard2Label, HireCard2SendButton,
        HireCardsContainer, HireIcon1, HireIcon2, HireIcon3,
    HireCard3, HireCard3ButtonContainer, HireCard3C, HireCard3InputEmail,
     HireCard3InputEmailLabel,HireCard3InputMessage, HireCard3InputMessageLabel,
      HireCard3InputsContainer,HireCard3Label,HireCard3SendButton, HireCard12, HireRadioGroup } from '../Components/HireElemens';
import bg4 from '../images/Background-4.png';
import {Radio} from 'antd';





function Hire() {
    return (
        <div id="Hire">
            <HeroContainer   smooth={true} duration={500} spy={true}
             exact="true" offset={-80} style={{zIndex: '997'}} >
                 <HeroBg>
                    <HeroBgImage src={bg4} alt="background3"/>
                     </HeroBg>  
                     <HireCardsContainer>
                     <HireCard1>
                        <HireCard1C>
                            <HireCard1CLabel>Download, follow, add</HireCard1CLabel>
                            <HireCard1IconContainer>
                                <HireIcon1/>
                                <HireIcon2/>
                                <HireIcon3/>
                            </HireCard1IconContainer>
                        </HireCard1C>
                     </HireCard1>
                     <HireCard12>
                        <HireCard2>
                            <HireCard2C>
                                <HireCard2Label>Send a mail</HireCard2Label>
                                <HireCard2InputsContainer>
                                    <HireCard2InputMessageLabel>Message</HireCard2InputMessageLabel>
                                    <HireCard2InputMessage 
                                    placeholder="Keep it up! Got somethimg for you"
                                    rows="4" cols="50"/>
                                   
                                    <HireCard2InputEmailLabel>Email</HireCard2InputEmailLabel>
                                    <HireCard2InputEmail type="email" 
                                    placeholder="example@mail.com"/>


                                </HireCard2InputsContainer>
                                <HireCard2ButtonContainer>
                                    <HireCard2SendButton>Send</HireCard2SendButton>

                                </HireCard2ButtonContainer>
                            </HireCard2C>
                        </HireCard2>
                        <HireCard3>
                            <HireCard3C>
                                <HireCard3Label>
                                Buy me a coffee
                                </HireCard3Label>
                                <HireCard3InputMessageLabel>
                                    Message
                                </HireCard3InputMessageLabel>
                              
                            </HireCard3C>

                        </HireCard3>


                     </HireCard12>

                     </HireCardsContainer>




             </HeroContainer>
        </div>
    )
}

export default Hire
