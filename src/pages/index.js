import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import useLatestData from "../utils/useLatestData"
import { HomeGridStyles } from "../styles/GridStyles"
import LoadingGrid from "../components/LoadingGrid"

function HomeProjects({ projects }) {
  return (
    <div>
      {!projects && <LoadingGrid count={2} />}
      {projects && !projects?.length && <p>No Projects</p>}
    </div>
  )
}

function HomePics({ pics }) {
  return (
    <div>
      {!pics && <LoadingGrid count={2} />}
      {pics && !pics?.length && <p>No Pics</p>}
    </div>
  )
}

function HomeBuilds({ builds }) {
  return (
    <div>
      {!builds && <LoadingGrid count={2} />}
      {builds && !builds?.length && <p>No Builds</p>}
    </div>
  )
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
