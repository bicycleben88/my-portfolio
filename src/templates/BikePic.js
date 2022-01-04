import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-plugin-sanity-image"
import styled from "styled-components"
import SEO from "../components/SEO"

const SingleBikePicStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-transform: capitalize;
    text-decoration: underline;
    margin-top: 2rem;
  }
`
export default function BikePic({ data }) {
  const { singleBike } = data

  return (
    <>
      <SEO title={singleBike.name} image={singleBike.image.asset?.url} />
      <SingleBikePicStyles>
        <Image {...singleBike.image} alt={singleBike.name} />
        <h2>{singleBike.name}</h2>
        <p>{singleBike.description}</p>
      </SingleBikePicStyles>
    </>
  )
}

export const query = graphql`
  query SingleBikeQuery($slug: String!) {
    singleBike: sanityBikePictures(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        ...ImageWithPreview
        asset {
          url
        }
      }
    }
  }
`
