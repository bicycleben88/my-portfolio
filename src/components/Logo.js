import React from "react"
import styled from "styled-components"
import background from "../assets/background.svg"

const LogoStyles = styled.div`
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 20em;
  height: 15em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 1em;
  background: white url(${background});
  background-size: 0.5em;
  border: var(--borderSize) solid white;
  display: flex;
  transform: translateY(-3rem);
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    align-content: center;
  }
  h1 {
    margin: 0;
    transform: translateY(0.5em);
  }
  .letter {
    font-size: 5em;
    display: inline-block;
    line-height: 1;
    text-transform: uppercase;
    text-shadow: 0.4rem 0.4rem 0 var(--purple);
  }
  .h {
    transform: translateY(-0.15em);
  }
  .b {
    transform: scale(1.1);
    perspective: 100px;
  }
  @media (max-width: 850px) {
    transform: none;
    .letter {
      text-shadow: 0.2rem 0.2rem 0 var(--purple);
    }
  }
`

export default function Logo() {
  return (
    <LogoStyles>
      <div className="inner">
        <h1>
          {/* <span className="b"> */}
          <span className="letter b">B</span>
          {/* </span> */}
          {/* <span className="h"> */}
          <span className="letter h">H</span>
          {/* </span> */}
        </h1>
      </div>
    </LogoStyles>
  )
}
