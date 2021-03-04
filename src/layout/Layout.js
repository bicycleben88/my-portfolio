import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/global.css"
import Clocks from "../components/Clocks"

const Layout = props => {
  return (
    <>
      <Header />
      <Clocks />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
