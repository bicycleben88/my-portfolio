import { Link } from "gatsby"
import React from "react"

function SingleBlog({ blog }) {
  return (
    <div>
      <Link to={blog.fields.slug}>
        <h2>{blog.frontmatter.title}</h2>
      </Link>
      <p>{blog.excerpt}</p>
    </div>
  )
}
export default function BlogList({ blogs }) {
  return (
    <div>
      {blogs.map(blog => (
        <SingleBlog blog={blog} key={blog.id} />
      ))}
    </div>
  )
}
