import React from "react"
import styled from "styled-components"

const SimpsonListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`
const EpisodeStyles = styled.div`
  display: grid;
  justify-content: center;
  box-shadow: 1px 1px 2px 2px var(--purple);
  padding: 2rem;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`

function Episode({ singleEpisode }) {
  const { episode, name, rating, season, thumbnailUrl } = singleEpisode

  const episodeRating = Math.round(rating)
  return (
    <EpisodeStyles>
      <img src={thumbnailUrl} alt={name} />
      <h4>{name}</h4>
      <h5>
        <span>Season:{season} </span>
        <span>Episode:{episode}</span>
      </h5>
      <p>
        {`🎞`.repeat(episodeRating)}
        <span style={{ opacity: `0.2` }}>{`🎞`.repeat(10 - episodeRating)}</span>
      </p>
    </EpisodeStyles>
  )
}

export default function SimpsonsList({ episodes }) {
  return (
    <SimpsonListStyles>
      {episodes.map(episode => (
        <Episode key={episode.id} singleEpisode={episode} />
      ))}
    </SimpsonListStyles>
  )
}
