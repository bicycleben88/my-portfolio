import React from "react"
import { graphql, Link } from "gatsby"
import ProjectList from "../components/ProjectList"
import ProjectFilter from "../components/ProjectFilter"
import SEO from "../components/SEO"

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes
  return (
    <>
      <SEO title="Projects" />
      <ProjectFilter />
      <ProjectList projects={projects} />
    </>
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
        description
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
