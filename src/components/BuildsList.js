import React from "react"
import styled from "styled-components"
import Image from "gatsby-plugin-sanity-image"
import { Link } from "gatsby"

const BuildStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto minmax(5rem, auto) 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  gap: 1rem;
  position: relative;
  p {
    margin: 0;
  }
`

function Build({ build }) {
  return (
    <BuildStyles>
      {" "}
      <Link to={`/builds/${build.slug.current}`}>
        <h3 className="sticker">{build.name}</h3>
      </Link>
      <Image {...build.image} alt={build.name} />
    </BuildStyles>
  )
}

export default function BuildsList({ builds }) {
  return (
    <div>
      {builds.map(build => (
        <Build build={build} key={build.id} />
      ))}
    </div>
  )
}
