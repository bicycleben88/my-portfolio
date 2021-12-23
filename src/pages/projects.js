import React from "react"
import { graphql, Link } from "gatsby"
import ProjectList from "../components/ProjectList"
import ProjectFilter from "../components/ProjectFilter"

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes
  return (
    <div>
      <ProjectFilter />
      <ProjectList projects={projects} />
    </div>
  )
}

export const query = graphql`
  query ProjectQuery($technology: [String]) {
    projects: allSanityProject(
      filter: { technologies: { elemMatch: { name: { in: $technology } } } }
    ) {
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
          ...ImageWithPreview
        }
      }
    }
  }
`
