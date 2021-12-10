import React from "react"
import styled from "styled-components"
import "normalize.css"
import Footer from "./Footer"
import Nav from "./Nav"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import background from "../assets/background.svg"

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`

const BorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background: white url(${background});
  background-size: 5px;
  background-attachment: fixed;
  border: solid 5px white;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`

export default function Layout({ children }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <BorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </BorderStyles>
    </>
  )
}
