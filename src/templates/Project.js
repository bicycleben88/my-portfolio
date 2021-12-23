import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-plugin-sanity-image"

const SingleProjectStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`

export default function SingleProjectPage({ data }) {
  const { project } = data
  return (
    <SingleProjectStyles>
      <Image {...project.image} width={300} height={200} alt={project.name} />
      <div>
        <Link to={project.url}>
          <span className="mark">Live Site!</span>
        </Link>
        <h2 className="mark">{project.name}</h2>
        <ul>
          {project.technologies.map(tech => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
        <p>{project.description}</p>
        <Link to={project.video}>Video Walkthru</Link>
      </div>
    </SingleProjectStyles>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      description
      url
      video
      technologies {
        name
        id
      }
      image {
        ...ImageWithPreview
      }
    }
  }
`
