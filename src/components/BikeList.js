import React from "react"
import Image from "gatsby-plugin-sanity-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { GridListStyles } from "../styles/GridStyles"

const BikeStyles = styled.div`
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
    padding: 3px;
  }
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
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
    <GridListStyles>
      {pics.map(pic => (
        <BikePic pic={pic} key={pic.id} />
      ))}
    </GridListStyles>
  )
}
