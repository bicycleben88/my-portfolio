import { Link } from "gatsby"
import React from "react"
import Image from "gatsby-plugin-sanity-image"
import styled from "styled-components"
import { GridStyles } from "../styles/GridStyles"

const ProjectStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto minmax(5rem, auto) 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  gap: 1rem;
  p {
    margin: 0;
  }
`
function SingleProject({ project }) {
  return (
    <ProjectStyles>
      <Link to={`/project/${project.slug.current}`}>
        <h2>
          <span className="span">{project.name}</span>
        </h2>
      </Link>
      <p>{project.technologies.map(tech => tech.name).join(", ")}</p>
      <Image {...project.image} width={300} height={200} alt={project.name} />
    </ProjectStyles>
  )
}

export default function ProjectList({ projects }) {
  return (
    <GridStyles>
      {projects.map(project => (
        <SingleProject project={project} key={project.id} />
      ))}
    </GridStyles>
  )
}
