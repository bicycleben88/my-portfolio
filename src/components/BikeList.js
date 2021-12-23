import React from "react"
import Image from "gatsby-plugin-sanity-image"
import styled from "styled-components"

const BikeListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto auto 300px;
  gap: 4rem;
`
const BikeStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto minmax(5rem, auto) 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  gap: 1rem;
  p {
    margin: 0;
  }
`

function BikePic({ pic }) {
  return (
    <BikeStyles>
      <h3>{pic.name}</h3>
      <Image {...pic.image} alt={pic.name} width={300} height={200} />
      <p>{pic.description}</p>
    </BikeStyles>
  )
}
export default function BikeList({ pics }) {
  return (
    <BikeListStyles>
      {pics.map(pic => (
        <BikePic pic={pic} key={pic.id} />
      ))}
    </BikeListStyles>
  )
}
