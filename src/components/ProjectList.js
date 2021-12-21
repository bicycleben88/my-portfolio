import { Link } from "gatsby"
import React from "react"

function SingleProject({ project }) {
  return (
    <div>
      <Link to={`/project/${project.name}`}>
        <h2>{project.name}</h2>
      </Link>
      <p>{project.technologies.map(tech => tech.name).join(", ")}</p>
    </div>
  )
}

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.map(project => (
        <SingleProject project={project} key={project.id} />
      ))}
    </div>
  )
}
