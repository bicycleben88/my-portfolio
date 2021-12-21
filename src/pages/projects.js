import React from "react"
import { graphql, Link } from "gatsby"
import ProjectList from "../components/ProjectList"

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes
  return (
    <div>
      <ProjectList projects={projects} />
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
