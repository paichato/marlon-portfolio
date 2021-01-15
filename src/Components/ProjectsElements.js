import styled, {keyframes} from 'styled-components';
import {FaFileCode as codeIcon} from 'react-icons/fa';
import {FaNodeJs, FaReact, FaGithub} from 'react-icons/fa';
import {SiFirebase} from 'react-icons/si';
import {Link} from 'react-scroll';


export const ProjectsContainer=styled.div`
position: absolute;
color:white;
z-index: 3;
justify-content:center;
align-items:center;
display:flex;
flex-direction: column;

`

export const ProjectsTitle=styled.h1`
font-family: 'hooge 05_54';
font-size:50px;


`

export const ProjectsMiniTitle=styled.p`
font-size: 15px;
text-align:justify;
justify-content:center;
margin-bottom: 300px;
`

export const ProjectsModalsContainer=styled.div`

justify-content:space-between;
display:flex;


@media screen and (max-width: 580px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height:130px;
    
}
`

export const ProjectsModal1=styled.div`
padding:10px;
cursor: pointer;
transition: all 0.2s ease-in-out; 

&:hover{
    transform: scale(1.1,1.1)
}

@media screen and (max-width: 580px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height:130px;
    
}

`

export const ProjectsIconContainer=styled.div`
z-index: 5;
border-radius:160px;
background:white;
display: flex;
position: absolute;
justify-content: center;
align-items:center;
margin-top:-40px;
margin-left: 20px;
width:70px;
height:70px;

&:hover{
    overflow:hidden;
}

@media screen and (max-width: 580px){
    
    visibility: hidden;
    
}
`

export const ProjectsIcon=styled(codeIcon)`
color: #9d3232;
width: 40px;
height:40px;
position: relative;
`

export const ProjectsBoxContainer=styled.div`
border-radius: 15px;
background: #f35353;
height:200px;
width:250px;
transition: all 0.2s ease-in-out;

background: linear-gradient(315deg, #293c5d, #30486e);
/* background: linear-gradient(315deg, #1c2940, #21314c); */
box-shadow:  -5px -5px 27px #7e2828,
             5px 5px 27px black;

             @media screen and (max-width: 580px){
                 padding:5px;
                 margin-bottom:150px;
                background: linear-gradient(315deg, #293c5d, #30486e);

                box-shadow:  1px 1px 1px black,
             5px 5px 27px black;
             }

`
export const ProjectsBoxIconsContainer=styled.div`
margin-left: 150px;
height:55px;
width:55px;
display: flex;
justify-content:flex-end;
align-items:flex-end;

`

export const ProjectsBoxIcon1=styled(FaNodeJs)`
height:100%;
width:100%;

`

export const ProjectsBoxIcon2=styled(FaReact)`

height:100%;
width:100%;
`

export const ProjectsBoxIcon3=styled(SiFirebase)`
height:100%;
width:100%;
`

export const ProjectsBoxTextContainer=styled.div`
display:block;
padding: 10px 10px 10px 10px;

`

export const ProjectsBoxText=styled.h2`
font-weight:bold;
display:flex;
justify-content:flex-start;
align-items:flex-start;

`

export const ProjectsBoxDescription=styled.p`
text-align:justify;

`

export const ProjectsBoxGitIconContainer=styled.div`
display:flex;
justify-content:flex-end;
align-items:flex-end;
margin-right:10px;
`

export const ProjectsBoxGitIcon=styled(FaGithub)`


`

export const ProjectsButtonContainer=styled.div`
position:absolute;

justify-content: center;
align-items:center;
display:flex;

`

export const ProjectsButton=styled(Link)`

background: #c04848;
cursor: pointer;
margin-bottom:200px;
border-radius:10px;
display:flex;
color:white;
position: absolute;
width:150px;
height: 40px;
white-space: nowrap;
justify-content:center;
align-items:center;
font-family: 'Encode Sans Expanded';
font-weight: bold;
/* box-shadow: 7px 5px 1px ; */
transition: all 0.2s ease-in-out;


&:hover{
    
    transform: scale(1.1,1.1);
}

`