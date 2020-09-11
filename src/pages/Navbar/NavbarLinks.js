// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SUILogo from "@images/avatars/sean.png"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #15CDCA;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #15CDCA;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    color: #eee;
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/learn">Learn</NavItem>
      <NavItem to="/contests">Contests</NavItem>
      <NavItem to="/community">Community</NavItem>
      <NavItem to="/sponsors">Sponsors</NavItem>
      <NavItem to="/about-us">About Us</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      
    </>
  )
}

export default NavbarLinks