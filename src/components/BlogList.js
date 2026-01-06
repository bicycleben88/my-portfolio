import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const SingleBlogStyles = styled.div`
  border-bottom: 2px solid var(--grey);
  margin-bottom: 1rem;
  h2 {
    font-size: 2.5rem;
  }
  p {
    margin: 0;
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 1.7rem;
      text-align: center;
    }
    p {
      line-height: 1.5rem;
      margin-top: 5px;
      font-size: 1.3rem;
    }
  }
`
const BlogListStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

function SingleBlog({ blog }) {
  return (
    <SingleBlogStyles>
      <Link to={`/blog/${blog.slug.current}`}>
        <h2>{blog.title}</h2>
      </Link>
      <p>{blog.excerpt || "Read more..."}</p>
    </SingleBlogStyles>
  )
}

export default function BlogList({ blogs }) {
  return (
    <BlogListStyles>
      {blogs.map(blog => (
        <SingleBlog blog={blog} key={blog.id} />
      ))}
    </BlogListStyles>
  )
}
