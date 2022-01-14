import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-plugin-sanity-image"
import SEO from "../components/SEO"

const SingleProjectStyles = styled.div`
  --minimum: 400px;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(var(--minimum), 1fr));
  position: relative;
  img {
    grid-row: span 3;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 950px) {
    .sticker {
      top: 5rem;
    }
  }
  @media (max-width: 500px) {
    --minimum: 200px;
  }
`

export default function SingleProjectPage({ data }) {
  const { project } = data
  return (
    <>
      <SEO title={project.name} image={project.image?.asset?.url} />
      <SingleProjectStyles>
        <h2 className="center">{project.name}</h2>
        <Image {...project.image} alt={project.name} />
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
    </>
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
        asset {
          url
        }
      }
    }
  }
`
