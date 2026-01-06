import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"

export default function BlogPost({ data }) {
  const post = data.sanityPost

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <Link to="/blogs">← Back to Blog</Link>
      <hr />
      <h1>{post.title}</h1>
      {/* <p style={{ color: "#666" }}>Published on {post.publishedAt}</p> */}

      <div className="post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </main>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
      #   publishedAt(formatString: "MMMM DD, YYYY")
      content
      slug {
        current
      }
    }
  }
`
