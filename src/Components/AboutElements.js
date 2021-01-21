import styled, {keyframes} from 'styled-components';
import {FaNodeJs, FaReact} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di';
import {MdExplicit} from 'react-icons/md';
import {Link} from 'react-scroll';
import {fadeInDownBig} from 'react-animations';


const slideDownAnimation= keyframes`${fadeInDownBig}`;



export const AboutContainer=styled.div`
position: absolute;
z-index: 3;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:400px;
//I have changed from 350px margin-right
margin-right:580px;
margin-top: 10px;
color: white;
transition: all 0.2s ease-in-out;

@media screen and (max-width:580px){
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    left:170px;
    width: 100%;
    height:100%;
    
}
@media screen and (max-width:680px){
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    left: 150px;
    width: 100%;
    height:100%;
    
}
`

export const IconsContainer=styled.div`
position: relative;
display:flex;
justify-content:space-between;
align-items:center;
bottom:50px;
width:400px;

`

export const IconX=styled(FaNodeJs)`
position: static;
width: 80px;
height:80px;
animation: 1s ${slideDownAnimation};

&:hover{
    transform: scale(1.1,1.1)
}

`
export const IconX2=styled(FaReact)`
position: static;
width: 80px;
height:80px;
animation: 1.5s ${slideDownAnimation};
transition: all 0.3s ease-in-out;

&:hover{
    transform: rotate(90deg)
}
`
export const IconX3=styled(DiMongodb)`
position: static;
width: 80px;
height:80px;
transition: all 0.3s ease-in-out;
animation: 2s ${slideDownAnimation};

&:hover{
    transform: skew(10deg, 20deg);
    color: greenyellow;
}
`
export const IconX4=styled(MdExplicit)`
position: static;
width: 80px;
height:80px;
animation: 2.5s ${slideDownAnimation};

&:hover{
    transform: scale(1.1,1.1);
    color: green;
}

&.About:target{
    transform: scale(1.1,1.1);
    color: green;
}
`


export const Description=styled.p`
text-align: justify;
font-family: 'Encode Sans Expanded';

`

export const ButtonWrapper=styled.div`
top:40px;
position: relative;
justify-content:center;
display:flex;
`

export const Button=styled(Link)`
background: linear-gradient(to right, #7474bf, #348ac7);
cursor: pointer;
/* border-radius: 10px; */
position:reative;
outline:none;
border:none;
display:flex;
justify-content:center;
align-items:center;
color:white;
width: 150px;
height:35px;
transition: all 1s ease-in-out;

&:hover{
    transform: scale(1.1, 1.1);
    background: linear-gradient(to right, #5c258d, #4389a2);
}

`