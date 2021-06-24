import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/Layout"
import Clocks from "../components/Clocks"
import BlogStyles from "../styles/blogStyles"
import VarsBar from "../components/VarsBar"

export default function Blog({ data }) {
  const { posts } = data.blog
  return (
    <Layout>
      <Clocks />
      <BlogStyles>
        <h1>Projects I want to share with you</h1>
        <VarsBar />
        {posts.map(post => {
          const techArray = post.frontmatter.primaryTech.split("| ")
          return (
            <article key={post.frontmatter.title} id="blogs">
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
              <ul>
                {techArray.map(tech => (
                  <li key={techArray.indexOf(tech)}>{tech}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </BlogStyles>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
