import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logo"

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-top: -6rem;
    text-align: center;
    list-style: none;
  }
  li {
    order: 1;
    .nav-text {
      font-size: 1.25rem;
      display: block;
    }
    .hide-me {
      display: block;
      visibility: hidden;
      font-size: 1.25rem;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  a {
    font-size: 2.25rem;
  }
`

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/projects">
            <span className="hide-me">x</span>
            Projects
            <span className="nav-text">Full Builds</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className="nav-text">Learn a lil'</span>
            About Me
            <span className="hide-me">x</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/builds">
            <span className="nav-text">Tiny Projects</span>
            Mini Builds
            <span className="hide-me">x</span>
          </Link>
        </li>
        <li>
          <Link to="/bikes">
            <span className="hide-me">x</span>
            Bike Stuff
            <span className="nav-text">rando...nneur</span>
          </Link>
        </li>
      </ul>
    </NavStyles>
  )
}