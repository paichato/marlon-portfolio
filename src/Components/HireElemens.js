import styled from 'styled-components';
import {HiOutlineDocumentDownload} from 'react-icons/hi';
// import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';





export const HireCardsContainer=styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
z-index: 3;


`

export const HireCard1=styled.div`
border-radius: 20px;
background: transparent;


/* border-right: 1.5px solid grey;
border-bottom: 1.5px solid grey; */
box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.2);

`

export const HireCard1C=styled.div`
height: 200px;
width: 300px;
padding:10px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`

export const HireCard1CLabel=styled.p`
font-size: 14px;
position: absolute;
z-index:4;
color:#8080804f;
display:flex;
justify-content:center;
align-items:center;
padding:10px;
text-align:justify;
margin-top: 10px;
font-weight:bold;

`

export const HireCard1IconContainer=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:row;
padding:30px;
margin-top: 50px;
width:200px;
color:#d49496;

a{
    color:#d49496;
}

`

export const HireIcon1=styled(HiOutlineDocumentDownload)`
height:40px;
width:40px;

transition: all 0.2s ease-in-out;
cursor: pointer;

&:hover{
    color:#c04848;
    transform: scale(1.1,1.1);
    
}


`

export const HireIcon2=styled(FaLinkedin)`
height:40px;
width:40px;
transition: all 0.2s ease-in-out;
cursor: pointer;

&:hover{
    color: #c04848;
    transform: scale(1.1,1.1);
}


`

export const HireIcon3=styled(FaGithub)`
height:40px;
width:40px;
transition: all 0.2s ease-in-out;
cursor: pointer;

&:hover{
    color:#c04848;
    transform: scale(1.1,1.1);
    
}
`

//HireCard12 container

export const HireCard12=styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
padding: 10px;


`

export const HireCard2=styled.div`
display: flex;
justify-content:space-between;
align-items: center;
flex-direction:column;
z-index: 3;
background:grey;
border-radius:10px;
font-family: 'Encode Sans Expanded';
box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.2);
background: transparent;
width:300px;

`
export const HireCard2C=styled.div`
padding:10px;
height: 200px;
width: 250px;
justify-content:center;
` 
export const HireCard2Label=styled.label`
display:flex;
justify-content: center;
align-items:center;
font-weight:bold;
color:#8080804f;
` 
export const HireCard2InputsContainer=styled.div`
` 

export const HireCard2InputMessageLabel=styled.label`
font-size: 12px;
padding:2px;
color:#8080804f;
`
export const HireCard2InputMessage=styled.textarea`
width:230px;
height:60px;
border-radius:8px;
border:none;

border-right: 1px solid #8080804f;
`

 export const HireCard2InputEmailLabel=styled.label`
 font-size: 12px;
padding:2px;
color:#8080804f;
 ` 
export const HireCard2InputEmail=styled.input`
width:230px;
height:25px;
border-radius:8px;
border:none;
`
export const HireCard2ButtonContainer=styled.div`
align-items:center;
justify-content:center;
display:flex;
margin-top: 10px;
`

export const HireCard2SendButton=styled.button`
justify-content:center;
align-items:center;
flex-direction:row;
width:80px;
padding:2px;
border-radius: 8px;
background:#d49496;
color:white;
outline:none;
border:none;
cursor: pointer;

&:hover{
    background:#c04848;
}
`
//HeroCard3

export const HireCard3=styled.div`
display: flex;
justify-content:space-between;
align-items: center;
flex-direction:column;
z-index: 3;
background:grey;
border-radius:10px;
font-family: 'Encode Sans Expanded';
box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.2);
background: transparent;
width:300px;
`
export const HireCard3C=styled.div`
padding:10px;
height: 200px;
width: 250px;
justify-content:center;
` 
export const HireCard3Label=styled.label`
display:flex;
justify-content: center;
align-items:center;
font-weight:bold;
color:#8080804f;
` 
export const HireCard3InputsContainer=styled.div`
` 

export const HireCard3InputMessageLabel=styled.label`
font-size: 12px;
padding:2px;
color:#8080804f;
`
export const HireCard3InputMessage=styled.textarea`
width:230px;
height:60px;
border-radius:8px;
border:none;

border-right: 1px solid #8080804f;
`

 export const HireCard3InputEmailLabel=styled.label`
 font-size: 12px;
padding:2px;
color:#8080804f;
 ` 
export const HireCard3InputEmail=styled.input`
width:230px;
height:25px;
border-radius:8px;
border:none;
`
export const HireCard3ButtonContainer=styled.div`
align-items:center;
justify-content:center;
display:flex;
margin-top: 10px;
`

export const HireCard3SendButton=styled.button`
justify-content:center;
align-items:center;
flex-direction:row;
width:80px;
padding:2px;
border-radius: 8px;
background:#d49496;
color:white;
outline:none;
border:none;
cursor: pointer;

&:hover{
    background:#c04848;
}
`
export const HireRadioGroup=styled.optgroup`

`

