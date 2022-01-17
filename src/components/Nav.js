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
    margin-top: -4rem;
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
  .logo {
    a {
      text-decoration: none;
    }
  }
  a {
    font-size: 2.25rem;
    font-family: "Fuzzy Bubbles", cursive;
    display: block;
    @media (max-width: 850px) {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 850px) {
    --columns: 4;
    --gap: 1rem;
    border-bottom: 2px solid var(--purple);
    padding-bottom: 2rem;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
      gap: var(--gap);
    }
    .logo {
      order: 0;
      grid-column: 1 / -1;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
    li {
      .nav-text,
      .hide-me {
        display: none;
      }
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
      </ul>
    </NavStyles>
  )
}
