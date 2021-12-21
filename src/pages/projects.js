import React from "react"
import { graphql, Link } from "gatsby"

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes
  return (
    <div>
      <p>waddup, there are {projects.length} projects</p>
    </div>
  )
}

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProject {
      nodes {
        name
        id
        slug {
          current
        }
        technologies {
          name
          id
        }
        image {
          asset {
            url
          }
        }
      }
    }
  }
`
