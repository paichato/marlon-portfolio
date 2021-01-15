

import styled ,{ keyframes} from 'styled-components';
import {Link} from 'react-scroll';
import {FaFileCode as codeIcon} from 'react-icons/fa';
import { fadeInUp, fadeInLeft, fadeInDownBig, zoomIn, flash} from 'react-animations';

const fadeAnimation= keyframes`${fadeInUp}`;
const fadeLeftAnimation= keyframes`${fadeInLeft}`;
const fadeDownAnimation=keyframes`${fadeInDownBig}`;
const zoomInAnimation= keyframes`${zoomIn}`;
const flashAnimation=keyframes`${flash}`;


export const Button= styled(Link)`
/* border-radius: 50px; */
background: ${({primary})=>(primary ? 'blue' : 'linear-gradient(to right, #c04848, #480048);')};
white-space: nowrap;
padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
color: ${({dark})=>(dark ? 'yellow' : 'white')};
outline: none;
border: none;
cursor: pointer;
display:flex;
justify-content:center;
align-items: center;
transition: all 0.2s ease-in-out;
//minhas mudancas para o button funcionar como desejo, sem isso fica button de uma
//..row ideal para promos
position: absolute;
/* flex-direction:column; */
z-index: 3;
/* margin-top: 580px;
margin-left:1000px; */

margin-top: 580px;
margin-left:45px;

animation: 3s ${fadeAnimation};
/* animation: 2s ${flashAnimation};
animation-duration: 7s;
animation-delay:4; */
/* animation-delay: -3s; */

@media screen and (max-width: 768px){
/* flex-direction:column; */
margin-top: 580px;
margin-left:200px;
border-radius:50px;
}

@media screen and (max-width:414px){
    margin-top:480px;
    margin-left:110px;
}




&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=>(primary ? '#fff' : 'linear-gradient(to right, #ec6f66, #f3a183);')};
}
`



export const Text=styled.h1`
flex-direction:column;
font-family:'hooge 05_54';
visibility: hidden;
z-index: 3;
position: absolute;
margin-top:390px;
margin-left: 200px;
transition: all 0.2s ease-in-out;
color: white;
animation: 3s ${fadeLeftAnimation};
animation-delay: -1s;


@media screen and (max-width:768px){

    visibility: visible;
}

@media screen and (max-width:414px){
    margin-top:150px;
    margin-left:110px;
}

@media screen and (min-width:960px){
    visibility: visible;
    /* font-size: 50px;
    margin-left:945px;
    margin-top:370px; */

    font-size: 40px;
    margin-left:45px;
    margin-top:390px;
}

`

export const MiniText=styled.p`

visibility: hidden;
font-family: 'Gadugi';
font-size:12px;
z-index:3;
position: absolute;
margin-top:490px;
margin-left: 190px;
transition: all 0.2s ease-in-out;
color:white;
animation: 1s ${zoomInAnimation};

@media screen and (max-width:768px){

visibility: visible;
}

@media screen and (min-width:960px){
    visibility: visible;
    /* font-size: 18px;
    margin-left:945px;
    margin-top:510px; */

    font-size: 13px;
    margin-left:45px;
    margin-top:510px;
}
@media screen and (max-width:414px){
    margin-top:440px;
    margin-left:100px;
}

`

export const CodeIconContainer=styled.div`
position: absolute;
z-index: 3;

margin-left: 45px;
margin-top:280px;
animation: 2s ${fadeDownAnimation};

@media screen and (max-width: 768px){
    margin-left: 230px;
    /* visibility: hidden; */
}

@media screen and (max-width:414px){
    margin-top:320px;
    margin-left:150px;
}

`

export const CodeIcon=styled(codeIcon)`
position: absolute;
z-index: 3;
width:100px;
height: 100px;
color:white;
/* margin-left: 45px;
margin-top:280px; */




`