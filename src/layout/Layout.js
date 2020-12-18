import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/global.css"

const Layout = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
