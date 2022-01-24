import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const FooterStyles = styled.div`
  --columns: 4;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 1rem;
  border-top: 2px solid var(--purple);
  padding-top: 1rem;
  margin-top: 1rem;
  @media (max-width: 750px) {
    --columns: 2;
  }
  @media (max-width: 500px) {
    --columns: 1;
  }
`
export default function Footer() {
  return (
    <FooterStyles>
      <h5>(352) 642-6701</h5>
      <a
        href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"
        target="#"
      >
        <h5>LinkedIn</h5>
      </a>
      <h5>
        <Link to="/contact">Contact Page</Link>
      </h5>
      <h5>bicycleben88@gmail.com</h5>
    </FooterStyles>
  )
}
