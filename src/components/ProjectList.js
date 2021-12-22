import { Link } from "gatsby"
import React from "react"
import Image from "gatsby-plugin-sanity-image"

function SingleProject({ project }) {
  return (
    <div>
      <Link to={`/project/${project.name}`}>
        <h2>{project.name}</h2>
      </Link>
      <p>{project.technologies.map(tech => tech.name).join(", ")}</p>
      <Image
        {...project.image}
        width={300}
        height={200}
        style={{
          width: "300px",
          height: "200px",
          objectFit: "cover",
        }}
      />
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
