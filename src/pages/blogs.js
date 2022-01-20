import React from "react"
import { graphql } from "gatsby"
import BlogList from "../components/BlogList"
import SEO from "../components/SEO"

export default function BlogPage({ data }) {
  const blogs = data.blogs.nodes
  return (
    <>
      <SEO title="blogs" />
      <BlogList blogs={blogs} />
    </>
  )
}

export const pageQuery = graphql`
  query GetBlogsQuery {
    blogs: allMarkdownRemark {
      nodes {
        frontmatter {
          date
          title
          about
        }
        fields {
          slug
        }
        excerpt
        id
      }
    }
  }
`
