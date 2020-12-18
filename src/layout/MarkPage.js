import React from "react"
import Layout from "./Layout"
import { graphql } from "gatsby"

export default function MarkPage({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1 style={{ fontSize: "45px" }}>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      <h3>
        <a href={post.frontmatter.url} target="#">
          Live Site
        </a>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        url
      }
    }
  }
`
