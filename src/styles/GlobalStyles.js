import { createGlobalStyle } from "styled-components"
import bgImageFile from "../assets/bg-image.jpg"

const GlobalStyles = createGlobalStyle`
  :root {
    --yellow: #ffc600;
    --light: #ffffff;
    --dark: #000000;
    --lightGrey: #d8d8d8;
    --white: #ffffff;
    --bg-image: url(${bgImageFile});
    --bg-opacity: 0.25;
  }

  :root[data-theme=dark] {
    --light: #00112f; 
    --dark: #ffffff;
    --lightGrey: #333333;
  }

  html {
    background-color: var(--light);
    color: var(--dark);
    transition: background-color .3s ease, color .3s ease;
  }

  body::before {
    content: "";
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: -1;
    background-image: var(--bg-image);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: var(--bg-opacity);
    pointer-events: none;
  }

  button {
    background: var(--yellow);
    color: var(--dark);
    border: 2px solid var(--dark);
    padding: 1rem 2rem;
    font-weight: 900;
    cursor: pointer;
    filter: url(#grit);
    transform: rotate(-1deg);
    transition: all 0.2s;
    &:hover {
      transform: rotate(1deg) scale(1.05);
    }
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--yellow) var(--dark);
  }
  body::-webkit-scrollbar { width: 12px; }
  body::-webkit-scrollbar-track { background: var(--dark); }
  body::-webkit-scrollbar-thumb {
    background-color: var(--yellow);
    border-radius: 6px;
    border: 3px solid var(--dark);
  }
`

export default GlobalStyles
