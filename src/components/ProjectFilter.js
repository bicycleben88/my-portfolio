import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const TechStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 4rem;
  background: #000;
  padding: 1rem;
  border: 4px solid #000;
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.1);

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    background: #fff;
    color: #000;
    text-decoration: none;
    font-family: Impact, sans-serif;
    font-size: 1.6rem;
    transition: all 0.2s ease;

    .name {
      border-bottom: 3px solid var(--yellow);
    }

    .count {
      background: none;
      font-family: "Courier New", Courier, monospace;
      font-weight: bold;
      font-size: 1.2rem;
      padding: 0;
      color: #444;
    }

    &:hover {
      transform: translateY(-2px);
      background: var(--yellow);
    }

    &[aria-current="page"] {
      background: var(--yellow);
      .count {
        color: #000;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
    a {
      font-size: 1.2rem;
    }
  }
`

function countTechsInProject(projects) {
  const counts = projects
    .map(project => project.technologies)
    .flat()
    .reduce((acc, tech) => {
      const existingTech = acc[tech.id]
      if (existingTech) {
        existingTech.count += 1
      } else {
        acc[tech.id] = {
          id: tech.id,
          name: tech.name,
          count: 1,
        }
      }
      return acc
    }, {})

  const sortedTechnologies = Object.values(counts).sort(
    (a, b) => b.count - a.count
  )

  return sortedTechnologies
}

export default function ProjectFilter() {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allSanityProject {
        nodes {
          name
          id
          technologies {
            name
            id
          }
        }
      }
    }
  `)

  const techsWithCount = countTechsInProject(projects.nodes)

  return (
    <TechStyles>
      <Link to="/projects">
        <span className="name">All</span>
        <span className="count">{projects.nodes.length}</span>
      </Link>
      {techsWithCount.map(tech => (
        <Link to={`/tech/${tech.name}`} key={tech.id}>
          <span className="name">{tech.name}</span>
          <span className="count">{tech.count}</span>
        </Link>
      ))}
    </TechStyles>
  )
}
