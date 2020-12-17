import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import HeaderStyles from "../styles/headerstyles"

const Header = props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <HeaderStyles>
      <img src="https://i.imgur.com/ihf8iIi.jpg?1" alt="Head Shot of Ben" />
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{data.site.siteMetadata.description}</h2>
      </div>
      <nav>
        <div>Phone</div>
        <div>Email</div>
        <div>Git</div>
      </nav>
    </HeaderStyles>
  )
}

export default Header
