import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import useLatestData from "../utils/useLatestData"
import { HomeGridStyles } from "../styles/GridStyles"
import LoadingGrid from "../components/LoadingGrid"
import ItemGrid from "../components/ItemGrid"
import styled from "styled-components"

const HomePageStyles = styled.div`
  @media (max-width: 850px) {
    h1 {
      font-size: 3rem;
    }
  }
`
function HomeProjects({ projects }) {
  return (
    <div>
      <Link to="/projects">
        <h2>Projects</h2>
      </Link>
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
      <Link to="/bikes">
        <h2>Bike Pics</h2>
      </Link>
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
      <Link to="/builds">
        <h2>Mini Builds</h2>
      </Link>
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
      <HomePageStyles>
        <h1 className="center">Ben Higginbotham</h1>
        <p>
          I'm a software engineer. I can write code in JavaScript. 'been doing
          that since 2020. I'm a cycling nerd. I can ride bikes in lycra. 'been
          doing that since 2007. I work professionally for a company called
          KnowCap and I work freelance.{" "}
          <a href="https://www.prestonmitchum.com" target="#">
            Here's a recent build of mine
          </a>
          .
        </p>
        <p>
          You can <Link to="/projects">see all of projects</Link>, where I have
          both full stack and single page, front end web apps. There are{" "}
          <Link to="/builds">mini builds here</Link>, where I use vanilla
          JavaScript to create really neat front end features. Don't forget{" "}
          <Link to="/bikes">to look at some pictures</Link> of a cross country
          bicycle trip I took. Below is a little sample of my work.
        </p>
      </HomePageStyles>
      <HomeGridStyles>
        <HomeProjects projects={homeProjects} />
        <HomeBuilds builds={homeBuilds} />
        <HomePics pics={homePics} />
      </HomeGridStyles>
    </>
  )
}
