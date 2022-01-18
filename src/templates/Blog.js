import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const BlogStyles = styled.div`
  overflow: auto;
  h2 {
    text-align: center;
  }
`

export default function Blog({ data }) {
  const { blog } = data
  return (
    <BlogStyles>
      <h2>{blog.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: blog.html }} />
    </BlogStyles>
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
