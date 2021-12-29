import React from "react"
import { graphql, Link } from "gatsby"
import SimpsonsList from "../components/SimpsonsList"
import SEO from "../components/SEO"

export default function SimpsonsPage({ data }) {
  const simpsonsEpisodes = data.episodes.nodes
  return (
    <>
      <SEO title="Simpsons Episodes" />
      <SimpsonsList episodes={simpsonsEpisodes} />
    </>
  )
}

export const query = graphql`
  query SimpsonsQuery {
    episodes: allEpisode(filter: { season: { eq: 1 } }) {
      nodes {
        episode
        id
        name
        rating
        season
        thumbnailUrl
      }
    }
  }
`
