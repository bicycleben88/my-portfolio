import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/Layout"
import Clocks from "../components/Clocks"
import BlogStyles from "../styles/blogStyles"

export default function Blog({ data }) {
  const [tilt, setTilt] = React.useState(0)

  function handleChange(e) {
    setTilt(e.target.value)
  }

  console.log(tilt)
  document.documentElement.style.setProperty(`--tilt`, tilt)
  const { posts } = data.blog
  return (
    <Layout>
      <Clocks />
      <BlogStyles>
        <h1>Projects I want to share with you</h1>
        <label>
          Tilt{" "}
          <input
            type="range"
            value={tilt}
            name="tilt"
            min="-10"
            max="0"
            onChange={handleChange}
          />
        </label>
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
