import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import openModal from '../Pages/Projects';


const Background=styled.div`
width:100%;
height:100%;
background: rgba(0,0,0,0.8);
position:fixed;
display:flex;
justify-content:center;
align-items:center;
z-index:9;
`

const BackgroundBigModal=styled.div`
position:absolute;
z-index:10;
background:#4d2222;
border-radius:2px;
`

const BigModalContainer=styled.div`



width:800px;
height:600px;
z-index:10;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
display:flex;
justify-content:space-between;
align-items:center;
padding:15px;
flex-direction:column;
border-radius:5px;
`
const BigModalLabel=styled.label`

font-size:14px;
font-weight:bold;
`

const BigModalImage=styled.img`
width:80%;
height:50%;
background: #000;
padding:30px;
border:none;
border-radius:5px;
outline:none;
box-shadow: 0 15px 16px rgba(0,0,0,0.2);
/* stroke:none; */
`

const BigModalText=styled.p`
padding:10px;
font:10px;
text-align:justify;

`

const BigModalButtonContainer=styled.div`
box-shadow: 0 15px 16px rgba(0,0,0,0.2);
`

const BigModalButton=styled(Link)`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:180px;
height:34px;
padding:2px;
border-radius: 8px;
background: linear-gradient(to right, #7474bf, #348ac7);
color:rgba(300,300,300,0.6);
outline:none;
border:none;
cursor: pointer;
text-decoration:none;
font-weight:bold;

&:hover{
    background:rgba(300,300,300,0.6);
    color:#3f86c6;
}
`

const CLoseIconContainer=styled.div`
position:absolute;
z-index:11;
top:1.2rem;
right:1.1rem;

`

const CloseIcon=styled(FaTimes)`
color:white;

&:hover{
    cursor: pointer;
    transform:scale(1.1,1.1);
}
`




export const BigModal=({showModal, setShowModal})=>{

    return(
    <>
    {showModal ? (
      
        <BackgroundBigModal>
            <BigModalContainer >
                <CLoseIconContainer>
                    <CloseIcon onClick={()=>setShowModal(prev=>!prev)} />
                </CLoseIconContainer>
                <BigModalLabel>Preview</BigModalLabel>
                <BigModalImage></BigModalImage>
                <BigModalText><strong> Description</strong><br/>
                
                An app that users can find dogs to adopt and give to adoption.
                An app that users can find dogs to adopt and give to adoption.
                An app that users can find dogs to adopt and give to adoption.
                </BigModalText>
                <BigModalButtonContainer>

                    <BigModalButton>See website</BigModalButton>
                </BigModalButtonContainer>

            </BigModalContainer>

        </BackgroundBigModal>
        
        
    ) : null}
    </>
    )
}
