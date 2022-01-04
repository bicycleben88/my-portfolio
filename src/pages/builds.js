import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import BuildsList from "../components/BuildsList"

export default function BuildsPage({ data }) {
  const builds = data.builds.nodes
  return (
    <>
      <SEO title="Mini Builds" />
      <BuildsList builds={builds} />
    </>
  )
}

export const query = graphql`
  query {
    builds: allSanityMiniBuild {
      nodes {
        name
        id
        image {
          ...ImageWithPreview
        }
        url
        video
        description
        slug {
          current
        }
      }
    }
  }
`
