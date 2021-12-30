import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const FooterStyles = styled.div`
  display: flex;
  border-top: 2px solid black;
  width: 95%;
  margin: 0 auto;
  h5 {
    margin: 4px;
  }
  @media (max-width: 500px) {
    justify-content: center;
    h5 {
      margin: 2px;
      font-size: smaller;
    }
  }
`
const Footer = props => {
  return (
    <FooterStyles>
      <h5>(352) 642-6701</h5>
      <h5>bicycleben88@gmail.com</h5>
      <a
        href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"
        target="#"
      >
        <h5>LinkedIn</h5>
      </a>
      <Link to="/contact">Contact Page</Link>
    </FooterStyles>
  )
}

export default Footer
