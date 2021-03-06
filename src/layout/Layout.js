import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/global.css"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
    --tilt: -10;
  }
`

const Layout = props => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
