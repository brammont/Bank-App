import React from 'react';
import {FaBars} from 'react-icons/fa'
import {  Nav, 
          NavbarContainer, 
          NavLogo,
          NavLinks,
          MobileIcon,
          NavItem,
          NavMenu
        }from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
         <NavbarContainer>
           <NavLogo to='/'>
             Dollar
           </NavLogo>
           <MobileIcon>
             <FaBars />
           </MobileIcon>
           <NavMenu>
             <NavItem>
               <NavLinks to='about'>About</NavLinks>
             </NavItem>
             <NavItem>
               <NavLinks to='discover'>Discover</NavLinks>
             </NavItem>
             <NavItem>
               <NavLinks to='Services'>Services</NavLinks>
             </NavItem>
             <NavItem>
               <NavLinks to='singup'>Sing Up</NavLinks>
             </NavItem>
           </NavMenu>
         </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar