import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

const NavStyles = styled.nav`
  position: relative;
  background: var(--dark);
  padding: 1rem;
  margin-bottom: 3rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: url(#grit);
    opacity: 0.4;
    pointer-events: none;
  }

  ul {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr auto;
    grid-gap: 1rem;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--light);
    font-family: Impact, sans-serif;
    font-size: clamp(1.4rem, 2vw, 2.2rem);
    line-height: 1.1;
    transition: transform 0.2s ease;

    &:hover {
      color: var(--yellow);
      transform: translateY(-2px);
    }
  }

  .nav-text {
    font-family: "Courier New", Courier, monospace;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--lightGrey);
    letter-spacing: 1px;
    margin: 0.3rem 0;
  }

  .hide-me {
    font-family: Impact, sans-serif;
    font-size: 0.9rem;
    color: var(--yellow);
    display: block;
    visibility: visible;
  }

  .logo {
    transform: rotate(-2deg);
  }

  @media (max-width: 1000px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem 1rem;
    }
    .logo {
      grid-column: 1 / -1;
      order: -1;
    }
  }

  @media (max-width: 600px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
    a {
      font-size: 1.4rem;
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
