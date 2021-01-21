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
import * as emailjs from 'emailjs-com';
import useModal from 'react-hooks-use-modal';




function Hire() {

    // const [Modal, open,close,isOpen]=useModal('root',{preventScroll:true})

    function sendEmail(e) {

        // emailjs.init('user_yoMvX7CLWqOm51wGcyqte');
        e.preventDefault();
            
       emailjs.sendForm('service_5njbg6m', 'template_cjwpmoi', e.target, 
        'user_yoMvX7CLWqOm51wGcyqte')
          .then((result) => {
              console.log(result.text);
              window.alert("mail sent!");

              //To reload page
            //   window.location.reload();
          }, (error) => {
              console.log(error.text);
              window.alert('Something went wrong!');
          });
            e.target.reset();
        
        }


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
                                <a href="https://github.com/paichato/resume/blob/main/README.md" rel="noreferrer" target="_blank"></a>
                                <HireIcon1/>
                                <a href="https://www.linkedin.com/in/marlon-d-jesus-6874271ab/" rel="noreferrer" target="_blank">
                                <HireIcon2 to="https://www.linkedin.com/in/marlon-d-jesus-6874271ab/" href="https://www.linkedin.com/in/marlon-d-jesus-6874271ab/"/>
                                </a>
                                <a href="https://github.com/paichato" rel="noreferrer" target="_blank">
                                <HireIcon3/>
                                </a>
                            </HireCard1IconContainer>
                        </HireCard1C>
                     </HireCard1>
                     <HireCard12>
                        <HireCard2>
                            <HireCard2C>
                                <form className="contact-form" name="contact-form" id="contact-form" onSubmit={sendEmail}>
                                <HireCard2Label>Send a mail</HireCard2Label>
                                <HireCard2InputsContainer>
                                    <HireCard2InputMessageLabel>Message</HireCard2InputMessageLabel>
                                    <HireCard2InputMessage 
                                    placeholder="Keep it up! Got somethimg for you"
                                    rows="4" cols="50" name="html_message" id="html_message"/>
                                   
                                    <HireCard2InputEmailLabel>Email</HireCard2InputEmailLabel>
                                    <HireCard2InputEmail type="email" 
                                    placeholder="example@mail.com"name="from_mail" id="from_mail"/>


                                </HireCard2InputsContainer>
                                <HireCard2ButtonContainer>
                                    <HireCard2SendButton id="button"  type="submit" form="contact-form">Send</HireCard2SendButton>

                                </HireCard2ButtonContainer>
                                </form>
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
