import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const BlogPost = ({ data }) => {
  const post = data.sanityPost

  return (
    <article>
      <h1>{post.title}</h1>
      {/* <p>Published on: {post.publishedAt}</p> */}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
      # publishedAt(formatString: "MMMM DD, YYYY") # Uncommented and formatted
      content
    }
  }
`

export default BlogPost
