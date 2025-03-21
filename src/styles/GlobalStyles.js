import { createGlobalStyle } from "styled-components"
import background from "../assets/background.svg"

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #1E2716;
    --black: #2E2E2E;
    --orange: #fb5607;
    --pink: #FF00FF;
    --yellow: #ffbe0b;
    --purple: #8338ec;
    --blue: #3a86ff;
    --white: #fff;
    --grey: #efefef;
  }

  html {
    font-size: 10px;
  }
 
  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--blue);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--pink) var(--purple);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--purple) ;
    border-radius: 6px;
    border: 1px solid var(--pink);
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  hr {
    border: 0;
    height: 8px;
    background-image: url(${background});
    background-size: 1500px;
  }
`

export default GlobalStyles
