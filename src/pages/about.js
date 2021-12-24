import React from "react"
import { graphql, Link } from "gatsby"
import SimpsonsList from "../components/SimpsonsList"

export default function AboutPage({ data }) {
  const simpsonsEpisodes = data.episodes.nodes

  return (
    <div>
      <h4>
        I'm a front end developer who grew up watching the Simpsons. Here's a
        list of their episodes:
      </h4>
      <SimpsonsList episodes={simpsonsEpisodes} />
    </div>
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
