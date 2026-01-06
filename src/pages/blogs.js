import React from "react"
import { graphql } from "gatsby"
import BlogList from "../components/BlogList"
import SEO from "../components/SEO"

export default function BlogPage({ data }) {
  const blogs = data.blogs.nodes
  return (
    <>
      <SEO title="blogs" />
      <h2 className="center" style={{ marginBottom: "3rem" }}>
        Blog Posts
      </h2>
      <BlogList blogs={blogs} />
    </>
  )
}

export const pageQuery = graphql`
  query GetBlogsQuery {
    blogs: allSanityPost {
      # Changed from allMarkdownRemark
      nodes {
        title # Sanity field
        id
        slug {
          current # Sanity's slug structure
        }
        # If you have an 'about' or 'excerpt' field in Sanity, add it here:
        # excerpt
      }
    }
  }
`
