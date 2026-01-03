import { createGlobalStyle } from "styled-components"

const Typography = createGlobalStyle`
  html {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: var(--dark);
  }

  p, li {
    letter-spacing: 0.2px;
    line-height: 1.6;
    font-size: 1.8rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Impact, 'Arial Narrow Bold', sans-serif;
    font-weight: normal;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  a {
    color: var(--dark);
    text-decoration-color: var(--yellow);
    text-decoration-thickness: 3px;
  }

  mark, .highlight {
    background: var(--yellow);
    padding: 0 2px;
    font-family: Impact, sans-serif; 
  }

  .center {
    text-align: center;
  }
`

export default Typography
