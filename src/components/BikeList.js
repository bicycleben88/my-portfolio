import React from "react"
import Image from "gatsby-plugin-sanity-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { GridStyles } from "../styles/GridStyles"

const BikeStyles = styled.div`
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

function BikePic({ pic }) {
  return (
    <BikeStyles>
      <Link to={`/bikes/${pic.slug.current}`}>
        <h3 className="sticker">{pic.name}</h3>
      </Link>
      <Image {...pic.image} alt={pic.name} width={300} height={200} />
      <p>{pic.description}</p>
    </BikeStyles>
  )
}

export default function BikeList({ pics }) {
  return (
    <GridStyles>
      {pics.map(pic => (
        <BikePic pic={pic} key={pic.id} />
      ))}
    </GridStyles>
  )
}
