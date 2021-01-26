import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/Layout"

export default function Blog({ data }) {
  const { posts } = data.blog
  return (
    <Layout>
      <h1>Projects I want to share with you</h1>
      {posts.map(post => {
        const techArray = post.frontmatter.primaryTech.split("| ")
        return (
          <article key={post.id}>
            <Link to={post.fields.slug}>
              <h2>
                {post.frontmatter.title}{" "}
                <span style={{ fontSize: "small", color: "black" }}>
                  {post.frontmatter.date}
                </span>
              </h2>
            </Link>
            <p>{post.frontmatter.about}</p>
            <h4>
              <a href={post.frontmatter.url}>Live Site</a>
            </h4>
            {/* <p>Built With: {post.frontmatter.primaryTech}</p> */}
            <ul>
              {techArray.map(tech => (
                <li>{tech}</li>
              ))}
            </ul>
          </article>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          title
          url
          primaryTech
          about
        }
      }
    }
  }
`
