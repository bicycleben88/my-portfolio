import React from "react"
import styled from "styled-components"
import Image from "gatsby-plugin-sanity-image"
import { Link } from "gatsby"
import { GridStyles } from "../styles/GridStyles"

const BuildStyles = styled.div`
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
    margin: 0;
  }
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`

function Build({ build }) {
  return (
    <BuildStyles>
      <Link to={`/builds/${build.slug.current}`}>
        <h3 className="sticker">{build.name}</h3>
      </Link>
      <Image {...build.image} alt={build.name} />
    </BuildStyles>
  )
}

export default function BuildsList({ builds }) {
  return (
    <>
      <h2>Mini Builds</h2>
      <p>
        Welcome to my mini builds page. What's a mini build, you say? I'll tell
        you!
      </p>
      <p>
        Mini builds are small. They don't use libraries or frameworks, just
        HTML, CSS, and JavaScript.
      </p>
      <p>
        Click on any one of them to learn a little bit more about them. You'll
        find descriptions as well as links to youtube and codepen
      </p>
      <p>
        ...or see them all in one place in{" "}
        <a href="https://www.youtube.com/playlist?list=PLjYC3ZkfhqCrYVFXyiULIr4MmmGUSdWMY">
          my youtube playlist
        </a>{" "}
        or <a href="https://codepen.io/collection/OLEqme">codepen collection</a>
      </p>
      <GridStyles>
        {builds.map(build => (
          <Build build={build} key={build.id} />
        ))}
      </GridStyles>
    </>
  )
}
