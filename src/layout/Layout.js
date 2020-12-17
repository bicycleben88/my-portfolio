import React from "react"
import Header from "../components/Header"

const Layout = props => {
  return (
    <>
      <Header />
      <main style={{ width: "75%", margin: "0 auto" }}>{props.children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default Layout
