import { Link } from "gatsby"
import React from "react"
import Image from "gatsby-plugin-sanity-image"
import styled from "styled-components"

const ProjectListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto auto 300px;
  gap: 4rem;
`
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
      <Link to={`/project/${project.name}`}>
        <h2>
          <span className="span">{project.name}</span>
        </h2>
      </Link>
      <p>{project.technologies.map(tech => tech.name).join(", ")}</p>
      <Image {...project.image} width={300} height={200} />
    </ProjectStyles>
  )
}

export default function ProjectList({ projects }) {
  return (
    <ProjectListStyles>
      {projects.map(project => (
        <SingleProject project={project} key={project.id} />
      ))}
    </ProjectListStyles>
  )
}
