import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const ContactBarStyles = styled.div`
  --columns: 4;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 1rem;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  @media (max-width: 750px) {
    --columns: 2;
    text-align: center;
    .email {
      grid-row: 1;
    }
  }
  @media (max-width: 500px) {
    padding: 0;
    .phone,
    .email {
      grid-column: span 2;
    }
  }
`
export default function ContactBar() {
  return (
    <ContactBarStyles>
      <h5 className="phone">(862) 424-0004</h5>
      <a
        href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"
        target="#"
      >
        <h5>LinkedIn</h5>
      </a>
      <a
        href="https://drive.google.com/file/d/1tbwplC8BXilm_Crcy2Lv8C5CxD7WVP4c/view?usp=sharing"
        target="#"
      >
        <h5>Resume</h5>
      </a>
      <h5 className="email">bicycleben88@gmail.com</h5>
    </ContactBarStyles>
  )
}
