import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/SEO"

const BlogStyles = styled.div`
  overflow: auto;
  h2 {
    text-align: center;
  }
  pre {
    background-color: black;
    color: white;
    padding: 0.5rem;
    font-size: 0.75em;
    overflow: auto;
  }
`

export default function Blog({ data }) {
  const { blog } = data
  return (
    <>
      <SEO title={blog.frontmatter.title} />
      <BlogStyles>
        <h2>{blog.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
      </BlogStyles>
    </>
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
