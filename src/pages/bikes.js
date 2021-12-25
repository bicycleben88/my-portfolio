import React from "react"
import { graphql } from "gatsby"
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
  query BikePicturesQuery($skip: Int = 0, $pageSize: Int = 5) {
    bikePics: allSanityBikePictures(skip: $skip, limit: $pageSize) {
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
