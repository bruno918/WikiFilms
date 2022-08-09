import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
           <img src='../logo.png' alt='logo' width="200" />
        </NavLink>
        <Bars />
        <NavMenu>
       
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/catalogo' activeStyle>
             Catalogo
          </NavLink>
          <NavLink as="a" href="https://github.com/bruno918" target="_blank" >
          Github
            </NavLink>
            <FaGithub style={{Width:50, heigth:50, marginleft:30}} />
        </NavMenu>      
        <NavBtn>
          <NavBtnLink to='/signin'>Login</NavBtnLink>
          <NavBtnLink to='/sign-in'>Cadastro</NavBtnLink>
        </NavBtn>
       
      </Nav>
    </>
  );
};

export default Navbar;