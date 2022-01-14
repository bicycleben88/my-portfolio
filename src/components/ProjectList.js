import { Link } from "gatsby"
import React from "react"
import Image from "gatsby-plugin-sanity-image"
import styled from "styled-components"
import { GridListStyles } from "../styles/GridStyles"

const ProjectStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto minmax(5rem, auto) 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  gap: 1rem;
  position: relative;
  box-shadow: 0 0 10px 1px var(--black);
  p {
    padding: 3px;
    margin: 0;
  }
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`
function SingleProject({ project }) {
  console.log({ project })
  return (
    <ProjectStyles>
      <Link to={`/project/${project.slug.current}`}>
        <h3>
          <span className="sticker">{project.name}</span>
        </h3>
      </Link>
      <Image {...project.image} width={300} height={200} alt={project.name} />
      <p>{project.description.substring(0, 30)}...</p>
    </ProjectStyles>
  )
}

export default function ProjectList({ projects }) {
  return (
    <GridListStyles>
      {projects.map(project => (
        <SingleProject project={project} key={project.id} />
      ))}
    </GridListStyles>
  )
}
