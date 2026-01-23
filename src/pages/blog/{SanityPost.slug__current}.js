import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

export default function BlogPost({ data }) {
  const post = data.sanityPost

  return (
    <article className="post-content">
      <h1>{post.title}</h1>
      <section className="markdown-body">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </section>
    </article>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
      content
    }
  }
`
