import React from "react"
import ToggleDisplay from "react-toggle-display"
import HeaderStyles from "../styles/headerstyles"

const Header = props => {
  const [display, setDisplay] = React.useState({ show: false })

  const handleToggle = () => {
    setDisplay({ show: !display.show })
  }

  return (
    <HeaderStyles>
      <img src="https://i.imgur.com/ihf8iIi.jpg?1" alt="Head Shot of Ben" />
      <div className="title">
        <h1>Benjamin A Higginbotham.</h1>
        <h2>I ride bikes in Lycra.</h2>
        <h2>I write code in JavaScript.</h2>
      </div>
      <nav>
        <div className="contact">
          <h3 onClick={() => handleToggle()}>Contact</h3>
          <ToggleDisplay show={display.show}>
            <h4>(352)642-6701</h4>
            <h4> bicycleben88@gmail.com</h4>
          </ToggleDisplay>
        </div>
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
