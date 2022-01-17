import React from "react"
import { graphql } from "gatsby"

export default function Blog({ data }) {
  const { blog } = data
  return (
    <div>
      <h1>{blog.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    blog: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
