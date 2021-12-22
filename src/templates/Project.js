import { graphql } from "gatsby"
import React from "react"

export default function SingleProjectPage() {
  return <p>single project</p>
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      technologies {
        name
        id
      }
      image {
        ...ImageWithPreview
      }
    }
  }
`
