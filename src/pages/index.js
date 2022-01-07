import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import useLatestData from "../utils/useLatestData"
import { HomeGridStyles } from "../styles/GridStyles"
import LoadingGrid from "../components/LoadingGrid"
import ItemGrid from "../components/ItemGrid"

function HomeProjects({ projects }) {
  return (
    <div>
      <h2>Projects</h2>
      <p>Full Websites & Web Applications</p>
      {!projects && <LoadingGrid count={2} />}
      {projects && !projects?.length && <p>No Projects</p>}
      {projects?.length && <ItemGrid items={projects} />}
    </div>
  )
}

function HomePics({ pics }) {
  return (
    <div>
      <h2>Bike Pics</h2>
      <p>I ride my bike all over the place</p>
      {!pics && <LoadingGrid count={2} />}
      {pics && !pics?.length && <p>No Pics</p>}
      {pics?.length && <ItemGrid items={pics} />}
    </div>
  )
}

function HomeBuilds({ builds }) {
  return (
    <div>
      <h2>Mini Builds</h2>
      <p>Bite Size Builds w/ Vanilla JS</p>
      {!builds && <LoadingGrid count={2} />}
      {builds && !builds?.length && <p>No Builds</p>}
      {builds?.length && <ItemGrid items={builds} />}
    </div>
  )
}

export default function HomePage() {
  const { homeBuilds, homePics, homeProjects } = useLatestData()

  return (
    <>
      <SEO title="Home" />
      <h1>Ben Higginbotham</h1>
      <p>Here's a little taste of the goody bits found in my work:</p>
      <HomeGridStyles>
        <HomeProjects projects={homeProjects} />
        <HomeBuilds builds={homeBuilds} />
        <HomePics pics={homePics} />
      </HomeGridStyles>
    </>
  )
}
