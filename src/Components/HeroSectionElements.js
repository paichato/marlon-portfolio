import styled, {keyframes} from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import {flash} from 'react-animations';
import {FaArrowCircleUp} from 'react-icons/fa';


const flashAnimation= keyframes`${flash}`;

export const HeroContainer=styled.div`
background: 222222;
border:none;
outline:none;
display:flex;
justify-content:center;
align-items:center;
padding: 0 30px;
height:880px;
position: relative;
z-index: 1;

/* animation: 5s ${flashAnimation};
animation-delay:3s; */
`
export const HeroBg=styled.div`
position: absolute;
top:0;
right:0;
bottom:0%;
left: 0;
width:100%;
height:100%;
overflow: hidden;

`

export const HeroBgImage=styled.img`
width:100%;
height: 100%;
-o-object-fit: cover;
object-fit:cover;
background: 222222;
border:none;



` 

export const HeroBtnContainer=styled.div`
margin-top: 32px; 
display:flex;
flex-direction:column;
align-items:center;
z-index: 2;
`

export const ArrowForward=styled(MdArrowForward)`
margin-left:8px;
font-size: 20px;

`

export const ArrowRight=styled(MdKeyboardArrowRight)`

`

export const IndexContainer=styled.div`
margin-left:70px;


`
export const GoUp=styled(FaArrowCircleUp)`
position: sticky;
z-index:4;
width:80px;
height:80px;
transition: all 0.2s ease-in-out;
background:red;
color: white;

&:hover{
    cursor: pointer;
    transform: scale(1.1,1.1);
}
`