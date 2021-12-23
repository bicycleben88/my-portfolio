import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const TechStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 1rem;
    align-items: center;
    border-radius: 2px;
    padding: 0.5rem;
    background: var(--grey);
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current="page"] {
      background: var(--pink);
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
