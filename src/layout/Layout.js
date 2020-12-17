import React from "react"
import Header from "../components/Header"
import "../styles/global.css"

const Layout = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default Layout
