// Navbar.js

import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import SUILogo from "@images/icons/logo.png"
const Navigation = styled.nav`
  height: 5vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 0vw;
  z-index: 20;
  align-self: center;

  @media (max-width: 768px) {
    z-index: 20;
    position: sticky;
    height: 3vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 5vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  z-index: -1;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    z-index: -1;
    flex-direction: column;
    position: fixed;
    width: 45%;
    box-shadow: 0px 20px 20px 1px black;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #212121;
    transition: all 0.3s ease-out;
    top: 10vh;
    right: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  float: right;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
   const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <a href="/"><div class="ui inverted small header">
      <img src={SUILogo} alt="Semantic UI icon logo" />
    </div></a>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar