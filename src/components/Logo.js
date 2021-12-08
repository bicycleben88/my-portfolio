import React from "react"
import styled from "styled-components"
import background from "../assets/background.svg"

const LogoStyles = styled.div`
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 30em;
  height: 18em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 1em;
  background: white url(${background});
  background-size: 0.5em;
  border: var(--borderSize) solid white;
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    align-content: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 2fr 1fr;
    align-items: center;
    margin: 0;
    grid-gap: 0.5em;
    transform: translateY(0.5em);
  }
  .higginbotham {
    font-size: 0.5rem;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
    text-shadow: 0.18em 0.18em 0 var(--purple);
  }
  .ben {
    transform: scale(1.1);
    display: block;
    text-shadow: 0.18em 0.18em 0 var(--purple);
    perspective: 100px;
  }
  .letter {
    font-size: 5em;
    color: var(--red);
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    text-transform: uppercase;
    &.b {
      --translateX: -0.05;
    }
    &.e {
      --rotate: 2deg;
      --scale: 1.4;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.n {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
  }
`

export default function Logo() {
  return (
    <LogoStyles>
      <div className="inner">
        <h1>
          <span className="ben">
            <span className="letter b">B</span>
            <span className="letter e">e</span>
            <span className="letter n">n</span>
          </span>
          <span className="higginbotham">
            <span className="letter">h</span>
            <span className="letter">i</span>
            <span className="letter">g</span>
            <span className="letter">g</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">b</span>
            <span className="letter">o</span>
            <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">a</span>
            <span className="letter">m</span>
          </span>
        </h1>
      </div>
    </LogoStyles>
  )
}
