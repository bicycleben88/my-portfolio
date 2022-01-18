import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const SingleBlogStyles = styled.div`
  --tall: 150px;
  box-shadow: 0 0 5px 1px var(--black);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 var(--tall);
  h2 {
    font-size: 2.5rem;
  }
  p {
    margin: 0;
  }
  @media (max-width: 400px) {
    --tall: 200px;
    h2 {
      font-size: 2rem;
      text-align: center;
    }
    p {
      line-height: 22px;
      margin-top: 5px;
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
      <Link to={blog.fields.slug}>
        <h2>{blog.frontmatter.title}</h2>
      </Link>
      <p>{blog.frontmatter.about}</p>
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
