
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
position: sticky;
/* background: transparent; */

display:flex;
justify-content: center;
align-items: center;
font-size:1rem;
height: 80px;
top:0;
z-index: 998;


@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`
export const NavContainer= styled.div`
display:flex;
justify-content: space-between;
/* height:80; */
z-index:10;
width: 100%;
padding: 0 24px;
max-width: 1100px;

/* position: sticky; */
`
export const NavLogo=styled(LinkR)`
color: #fff;
justify-self: flex-start;
font-size:1.5rem;
display: flex;
align-items: center;
font-weight:bold;
cursor: pointer;
margin-left:24px;
text-decoration:none;
font-family:Magneto;

&:hover{
 color:#ec6f66;
 transition: 0.2s ease-in-out;
 transform: scale(1.1,1.1);
 /* transform: skew(20deg); */
}

`
export const MobileIcon=styled.div`
display:none;

@media screen and (max-width: 768px){
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor: pointer;
    color:#fff;

&:hover{
    transition: 0.3s ease-in-out;
    color: red;
   
}
}

`

export const NavMenu=styled.ul`
display: flex;
align-items: center;
list-style:none;
text-align:center;
margin-right:-22px;
position: sticky;

@media screen and (max-width: 768px){
display:none;
}`

export const NavItem=styled.li`
height:80px;



`
export const NavLinks=styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
justify-content:left;
text-indent:0rem;
/* padding: 0 1rem; */
height:100%;
cursor:pointer;
float: left;
margin-right:180px;

&.active{
    border-bottom: 3px solid pink;
   
    
}

&:active{
    border-bottom: 3px solid pink;
   
    
}


`



