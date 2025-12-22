import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const ContactBarStyles = styled.div`
  --columns: 4;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  margin-bottom: 2rem;

  h5 {
    background: none;
    padding: 0;
    margin: 0;
    transform: none;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.9rem;
    color: var(--dark);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    white-space: nowrap;
  }

  a {
    text-decoration: none;
    &:hover h5 {
      color: var(--yellow);
    }
  }

  @media (max-width: 950px) {
    --columns: 2;
    text-align: center;
    gap: 1rem;

    h5 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 500px) {
    --columns: 1;
    padding: 0.5rem;

    .phone,
    .email {
      grid-column: span 1;
    }
  }
`

export default function ContactBar() {
  return (
    <ContactBarStyles>
      <h5 className="phone">(862) 424-0004</h5>
      <a
        href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h5>LinkedIn</h5>
      </a>
      <a
        href="https://drive.google.com/file/d/1tbwplC8BXilm_Crcy2Lv8C5CxD7WVP4c/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h5>Resume</h5>
      </a>
      <h5 className="email">bicycleben88@gmail.com</h5>
    </ContactBarStyles>
  )
}
