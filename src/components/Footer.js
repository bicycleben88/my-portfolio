import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  position: relative;
  background-color: var(--dark);
  color: var(--light);
  padding: 4rem 2rem;
  margin-top: 5rem;
  width: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: url(#grit);
    opacity: 0.2;
    pointer-events: none;
    z-index: 0;
  }

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 3rem;
    text-align: center;
  }

  a {
    color: var(--yellow);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 2500px) {
    &::after {
      content: "Wow, you have a big monitor!";
      display: block;
      position: fixed;
      top: 50%;
      right: 3rem;
      font-size: 5vh;
      pointer-events: none;
      transform: rotate(90deg) translateY(-50%);
      color: var(--yellow);
      opacity: 0.5;
      font-family: "Fuzzy Bubbles";
    }
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="footer-inner">
        <div>
          <h5>Text Me</h5>
          <p>(862) 424-0004</p>
        </div>
        <div>
          <h5>LinkedIn</h5>
          <a
            href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>
        <div>
          <h5>Contact</h5>
          <p>bicycleben88@gmail.com</p>
        </div>
      </div>
    </FooterStyles>
  )
}
