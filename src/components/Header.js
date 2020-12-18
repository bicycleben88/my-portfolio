import React from "react"
import HeaderStyles from "../styles/headerstyles"
import { Link } from "gatsby"

const Header = props => {
  return (
    <HeaderStyles>
      <div className="title">
        <Link to="/">
          <h1>Benjamin A Higginbotham.</h1>
        </Link>
        <h2>I ride bikes in Lycra.</h2>
        <h2>I write code in JavaScript.</h2>
      </div>
      <nav>
        <h3>(352) 642-6701</h3>
        <h3> bicycleben88@gmail.com</h3>
        <a
          href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"
          target="#"
        >
          <h3>LinkedIn</h3>
        </a>
      </nav>
    </HeaderStyles>
  )
}

export default Header
