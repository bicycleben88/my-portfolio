import React from "react"
import { graphql } from "gatsby"
import BikeList from "../components/BikeList"
import Pagination from "../components/Pagination"

export default function BikePage({ data, pageContext }) {
  const bikePics = data.bikePics.nodes

  return (
    <div>
      <Pagination
        pageSize={5}
        totalCount={data.bikePics.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/bikes"
      />
      <BikeList pics={bikePics} />
    </div>
  )
}

export const query = graphql`
  query BikePicturesQuery($skip: Int = 0, $pageSize: Int = 5) {
    bikePics: allSanityBikePictures(skip: $skip, limit: $pageSize) {
      totalCount
      nodes {
        name
        description
        id
        image {
          ...ImageWithPreview
        }
        slug {
          current
        }
      }
    }
  }
`
