import React from "react"
import { graphql, Link } from "gatsby"
import BikeList from "../components/BikeList"

export default function BikePage({ data }) {
  const bikePics = data.bikePics.nodes

  return (
    <div>
      <BikeList pics={bikePics} />
    </div>
  )
}

export const query = graphql`
  query BikePicturesQuery {
    bikePics: allSanityBikePictures {
      nodes {
        name
        description
        id
        image {
          ...ImageWithPreview
        }
      }
    }
  }
`
