import { createGlobalStyle } from "styled-components"
import headerFont from "../assets/FuzzyBubbles-Regular.ttf"
import font from "../assets/Nunito-Black.ttf"

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Fuzzy Bubbles';
    src: url(${headerFont});
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${font});
  }

  html {
    font-family: 'Nunito', sans-serif;
    color: var(--dark);
    font-size: 10px; 
  }

  h1 { font-size: 5rem; }
  h2 { font-size: 4rem; }
  h3 { font-size: 3rem; }
  h4 { font-size: 2.5rem; }
  h5 { font-size: 2rem; }
  h6 { font-size: 1.8rem; }

  p, li {
    letter-spacing: 0.5px;
    line-height: 1.77; 
    font-size: 2rem;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    font-family: 'Fuzzy Bubbles', cursive;
    line-height: 1.2;
  }

  a {
    color: var(--dark);
    text-decoration-color: var(--yellow); 
    text-decoration-skip-ink: none;
    transition: text-decoration-color 0.2s;
    &:hover {
      text-decoration-color: var(--dark);
    }
  }

  mark, .mark {
    background-color: var(--yellow);
    color: var(--dark);
    padding: 0 5px;
    margin: 0;
    display: inline;
    filter: url(#grit); 
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  .center { text-align: center; }
  .tilt { transform: rotate(-2deg); }
`

export default Typography
