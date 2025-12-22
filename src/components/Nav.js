import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

const NavStyles = styled.nav`
  position: relative;
  margin-bottom: 3rem;
  padding: 1rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: url(#grit);
    opacity: 0.15;
    pointer-events: none;
    z-index: -1;
  }

  ul {
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
      font-size: 1.2rem;
      display: block;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .hide-me {
      display: block;
      visibility: hidden;
      font-size: 1.2rem;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }

  .logo {
    transform: rotate(-2deg);
    a {
      text-decoration: none;
    }
  }

  a {
    font-size: 2.2rem;
    font-family: "Fuzzy Bubbles", cursive;
    display: block;
    text-decoration: none;
    color: var(--dark);
    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--yellow);
    }

    @media (max-width: 850px) {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 950px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    .logo {
      grid-column: 1 / -1;
      order: -1;
    }
  }

  @media (max-width: 500px) {
    li .nav-text,
    li .hide-me {
      display: none;
    }
    ul {
      grid-template-columns: repeat(2, 1fr);
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
