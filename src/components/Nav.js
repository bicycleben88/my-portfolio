import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

const NavStyles = styled.nav`
  position: relative;
  /* 1. Making the bar dark in light mode for contrast */
  background: var(--dark);
  padding: 2rem;
  margin-bottom: 4rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  /* 2. Adding the grit texture to the dark bar */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: url(#grit);
    opacity: 0.4; /* Slightly higher opacity to see it on the dark background */
    pointer-events: none;
    z-index: 0;
  }

  ul {
    position: relative;
    z-index: 1; /* Keep text above the grit */
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr auto;
    grid-gap: 2rem;
    align-items: center;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }

  li {
    transition: transform 0.2s ease;

    .nav-text {
      font-size: 1.1rem;
      display: block;
      color: var(--lightGrey);
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    /* 3. FIXING HIDE-ME: Making the 'x' visible and yellow */
    .hide-me {
      display: block;
      visibility: visible; /* Changed from hidden */
      font-size: 1.5rem;
      color: var(--yellow);
      font-family: "Fuzzy Bubbles", cursive;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }

  .logo {
    transform: rotate(-2deg);
    /* Ensure the logo is visible on dark. 
       If your Logo is an image/SVG, you might need filter: invert(1); */
    filter: brightness(0) invert(1);
  }

  a {
    font-size: 2rem;
    font-family: "Fuzzy Bubbles", cursive;
    display: block;
    text-decoration: none;
    /* 4. Using light text on the dark background */
    color: var(--light);

    &:hover {
      color: var(--yellow);
    }
  }

  /* Responsive stacking */
  @media (max-width: 950px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
    .logo {
      grid-column: 1 / -1;
      order: -1;
    }
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
          <Link to="/blogs">
            <span className="nav-text">Read My</span>
            Blog
            <span className="hide-me">x</span>
          </Link>
        </li>
        <li className="logo">
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
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </NavStyles>
  )
}
