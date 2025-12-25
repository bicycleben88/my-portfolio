import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-plugin-sanity-image"
import SEO from "../components/SEO"

const SingleProjectStyles = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  .project-image {
    position: relative;
    border: 6px solid var(--dark);
    line-height: 0;

    img {
      width: 100%;
      height: auto;
      max-height: 70vh;
      object-fit: cover;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: url(#grit);
      opacity: 0.4;
      pointer-events: none;
    }
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h2 {
    font-size: clamp(3rem, 5vw, 6rem);
    text-align: left;
    line-height: 0.9;
    margin-bottom: 1rem;
  }

  .sticker-link {
    position: relative;
    display: inline-block;
    background: var(--yellow);
    color: var(--dark);
    font-family: Impact, sans-serif;
    font-size: 2.5rem;
    padding: 1rem 2rem;
    text-transform: uppercase;
    transform: rotate(-2deg);
    border: 3px solid var(--dark);
    width: fit-content;
    text-align: center;
    box-shadow: 8px 8px 0 var(--dark);
    transition: all 0.2s;
    text-decoration: none;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: url(#grit);
      opacity: 0.5;
      pointer-events: none;
    }

    &:hover {
      transform: rotate(0deg) scale(1.05);
      box-shadow: 4px 4px 0 var(--dark);
    }
  }

  .tech-specs {
    border-top: 2px solid var(--lightGrey);
    padding-top: 2rem;

    h4 {
      font-family: "Courier New", Courier, monospace;
      font-size: 1rem;
      color: #666;
      margin-bottom: 1rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 0;
      margin: 0;
    }

    li {
      font-family: "Courier New", Courier, monospace;
      font-weight: bold;
      font-size: 1rem;
      background: var(--dark);
      color: var(--white);
      padding: 0.3rem 0.8rem;
      list-style: none;
    }
  }

  .actions {
    display: flex;
    gap: 1.5rem;
    a {
      font-family: Impact, sans-serif;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    .project-image img {
      max-height: 50vh;
    }

    h2 {
      text-align: center;
    }

    .sticker-link {
      align-self: center;
    }
  }
`

export default function SingleProjectPage({ data }) {
  const { project } = data
  return (
    <>
      <SEO title={project.name} image={project.image?.asset?.url} />
      <SingleProjectStyles>
        <div className="project-image">
          <Image {...project.image} alt={project.name} />
        </div>
        <div className="project-info">
          <h2>{project.name}</h2>
          <a
            href={project.url}
            className="sticker-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site!
          </a>
          <p>{project.description}</p>
          <div className="actions">
            <a
              href={project.video}
              className="mark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Walkthru
            </a>
            <Link to={`/${project.slug.current}`} className="mark">
              Full Blog Post
            </Link>
          </div>
          <div className="tech-specs">
            <h4>TECHNICAL SPECS //</h4>
            <ul>
              {project.technologies.map(tech => (
                <li key={tech.id}>{tech.name}</li>
              ))}
            </ul>
          </div>
        </div>
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
      slug {
        current
      }
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
