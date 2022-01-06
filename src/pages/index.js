import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import useLatestData from "../utils/useLatestData"
import { HomeGridStyles } from "../styles/GridStyles"

function HomeProjects() {
  return <div>Home project</div>
}

function HomePics() {
  return <div>Home pics</div>
}

function HomeBuilds() {
  return <div>Home builds</div>
}

export default function HomePage() {
  const { homeBuilds, homePics, homeProjects } = useLatestData()

  return (
    <>
      <SEO title="Home" />
      <h1>Ben Higginbotham</h1>
      <HomeGridStyles>
        <HomeProjects projects={homeProjects} />
        <HomeBuilds builds={homeBuilds} />
        <HomePics pics={homePics} />
      </HomeGridStyles>
    </>
  )
}
