import React from "react"
function Episode({ singleEpisode }) {
  const { episode, name, rating, season, thumbnailUrl } = singleEpisode

  const episodeRating = Math.round(rating)
  return (
    <div>
      <h4>{name}</h4>
      <img src={thumbnailUrl} alt={name} />
      <h5>
        <span>Season:{season} </span>
        <span>Episode:{episode}</span>
      </h5>
      <p>
        {`🎞`.repeat(episodeRating)}
        <span style={{ opacity: `0.2` }}>{`🎞`.repeat(10 - episodeRating)}</span>
      </p>
    </div>
  )
}

export default function SimpsonsList({ episodes }) {
  return (
    <div>
      {episodes.map(episode => (
        <Episode key={episode.id} singleEpisode={episode} />
      ))}
    </div>
  )
}
