import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.svg"

const LogoStyles = styled.div`
  font-size: clamp(1px, 0.65vw, 8px);
  width: 16em;
  height: 12em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0;
  --borderSize: 0.5em;
  background: white;
  background-size: 0.5em;
  border: var(--borderSize) solid white;
  display: flex;

  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 850px) {
    width: 14em;
    height: 10em;
  }
`

export default function Logo() {
  return (
    <LogoStyles>
      <div className="inner">
        <img src={logo} alt="BH Logo" />
      </div>
    </LogoStyles>
  )
}
