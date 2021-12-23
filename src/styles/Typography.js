import { createGlobalStyle } from "styled-components"

import font from "../assets/FuzzyBubbles-Regular.ttf"

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Fuzzy Bubbles';
    src: url(${font});
  }
  html {
    font-family: 'Fuzzy Bubbles', cursive;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--purple);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background-color: var(--pink);
    color: var(--grey);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`

export default Typography
