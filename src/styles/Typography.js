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
    font-family: 'Nunito'
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  p {
    line-height: 28px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    font-family: 'Fuzzy Bubbles', cursive;
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
    padding: 2px 2px 0 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }
  .sticker {
    position: absolute;
    right: -1rem;
    background-color: var(--yellow);
    transform: rotate(8deg);
    padding: 2px 2px 0 2px;
  }
  .center {
    text-align: center;
  }
  .tilt {
    transform: rotate(-2deg);
  }
`

export default Typography
