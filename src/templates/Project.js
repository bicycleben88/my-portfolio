import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-plugin-sanity-image"

const SingleProjectStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  position: relative;
  img {
    grid-row: span 3;
  }
  .sticker:hover {
    transform: scale(1.1) rotate(8deg);
  }
`

export default function SingleProjectPage({ data }) {
  const { project } = data
  return (
    <SingleProjectStyles>
      <h2>{project.name}</h2>
      <Image {...project.image} width={300} height={200} alt={project.name} />
      <Link to={project.url} className="sticker">
        <span>Live Site!</span>
      </Link>
      <ul>
        <li>
          <Link to={project.video}>
            <span className="mark">Video Walkthru</span>
          </Link>
        </li>
        {project.technologies.map(tech => (
          <li key={tech.id}>{tech.name}</li>
        ))}
      </ul>
      <p>{project.description}</p>
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
