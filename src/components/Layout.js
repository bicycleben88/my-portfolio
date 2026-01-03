import React from "react"
import styled from "styled-components"
import "normalize.css"
import Footer from "./Footer"
import Nav from "./Nav"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"

const MainContent = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding: clamp(2rem, 5vw, 6rem);
  @media (max-width: 1100px) {
    padding: 2rem;
  }
`

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export default function Layout({ children }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <SiteWrapper>
        <MainContent>
          <Nav />
          {children}
        </MainContent>
        <Footer />
      </SiteWrapper>
      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
      >
        <filter
          id="grit"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            result="noise"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </svg>
    </>
  )
}
