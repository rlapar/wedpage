import React, {Component} from "react";
import styled from "styled-components";
import NavLinks from "./Navlinks";

const MyMobileNavbar = styled.nav`
  background: ${ props => props.theme.primaryDark};
  
  margin-bottom: 15px;

  color: ${ props => props.theme.secondary};
  align-self: flex-end;
  
  transition: transform 1s;
  transform: translateX( ${props => props.displayMobileNavbar ? "0%" : "calc(100% + 15px)"});
  width: 50vw;
  box-shadow: -10px 10px 5px ${ props => props.theme.primaryLight};
  z-index: 2;

  .nav-links {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    height: 60vh;
    list-style: none;
  }

  .link {    
    color:${ props => props.theme.secondary};
    font-size: 2.5vh;
    text-decoration: none;
  }
`

const MobileNavbar = props => {
    return (
        <MyMobileNavbar displayMobileNavbar = {props.displayMobileNavbar}>
            <NavLinks isMobileLink = {true}/>
        </MyMobileNavbar>
    )
}

export default MobileNavbar