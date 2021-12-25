import React from "react"
import { graphql, Link } from "gatsby"
import SimpsonsList from "../components/SimpsonsList"

export default function SimpsonsPage({ data }) {
  const simpsonsEpisodes = data.episodes.nodes
  return (
    <>
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
