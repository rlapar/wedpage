import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import NavLinks from "./Navlinks";
import logo from "../../assets/images/wedding-rings-logo-white.svg";
import navIcon from "../../assets/images/menu_arrow.svg"

const MyDesktopNavbar = styled.nav`
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  
  background: ${ props => props.theme.primaryDark};
  color: ${ props => props.theme.secondary};
  
  height: 10vh;
  
  box-shadow: 0 10px 5px ${ props => props.theme.primaryLight};
  
  .logo {
    display: flex;
    justify-content: start;
    align-items: start;
    height: 80%;
    width: 80%;

    &:hover {
      height: 90%;
      width: 90%;
    }
  }
  
  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    
    width: 35vw;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }  
  
  .link {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    height: 10vh;
    
    padding: 0 1rem;
    color:${ props => props.theme.secondary};
    font-size: 2.5vh;
    text-decoration: none;
    border-radius: 10px;
    
    &:focus {
      background: rgba(0,0,0,0.2);
      outline: none;
    }
    
    &:hover {
      font-size: 3.5vh;
    }
  }
`

const MyMobileNavButton = styled.button`
  background: transparent;
  height: 8vh;
  width: 8vh;
  border: none;
  display: none;
  
  transition: transform 1s ease-in-out;
  transform: rotate(${props => props.displayMobileNavbar  ? ("180deg") : ("0deg")}  );
  
  &:focus {
    outline: none;
  }
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const DesktopNavbar = props => {
    return (
        <MyDesktopNavbar>
            <Link to={'/'} className="link">
                <img className="logo" src={logo} alt="logo" onClick = {props.toggleMobileNavbar}/>
            </Link>

            <NavLinks />
            <MyMobileNavButton
                displayMobileNavbar = {props.displayMobileNavbar}
                onClick = {props.toggleMobileNavbar}
            >
                <img src={navIcon}/>
            </MyMobileNavButton>

        </MyDesktopNavbar>
    )
}

export default DesktopNavbar