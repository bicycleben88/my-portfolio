import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import useLatestData from "../utils/useLatestData"
import { HomeGridStyles } from "../styles/GridStyles"
import LoadingGrid from "../components/LoadingGrid"
import ItemGrid from "../components/ItemGrid"
import styled from "styled-components"
import ContactBar from "../components/ContactBar"

const HomePageStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 2rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: Impact, sans-serif;
    text-transform: uppercase;
    line-height: 1;
    margin: 0;
  }

  h1 {
    font-size: clamp(4rem, 10vw, 8rem);
    text-align: center;
    margin-bottom: 2rem;
    letter-spacing: -2px;
  }

  h2 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    align-self: flex-start;
    transform: rotate(-1deg);
    background: var(--dark);
    color: var(--yellow);
    padding: 0.5rem 1rem;
    margin-left: 5%;
  }

  h3 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    align-self: flex-end;
    margin-right: 10%;
    transform: rotate(1deg);
    color: var(--dark);
    border-bottom: 6px solid var(--yellow);
  }

  h4 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    align-self: center;
    transform: translateX(-20px) rotate(-2deg);
    opacity: 0.8;
  }

  h5 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    align-self: flex-start;
    margin-left: 15%;
    font-family: "Courier New", Courier, monospace;
    background: var(--yellow);
    color: var(--dark);
    padding: 0.2rem 0.5rem;
  }

  @media (max-width: 850px) {
    gap: 1.5rem;
    h2,
    h3,
    h4,
    h5 {
      align-self: center;
      margin: 0;
      transform: none;
      text-align: center;
    }
  }
`

function HomeProjects({ projects }) {
  return (
    <div className="sampler">
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
    <div className="sampler">
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
    <div className="sampler">
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
        <ContactBar />
        <h1 className="center">Ben Higginbotham</h1>
        <h2>Current Tech Support Rep</h2>
        <h3>Ex Bartender</h3>
        <h4>Average Cyclist</h4>
        <h5>Never GQ Model</h5>
      </HomePageStyles>
      <HomeGridStyles>
        <HomeProjects projects={homeProjects} />
        <HomeBuilds builds={homeBuilds} />
        <HomePics pics={homePics} />
      </HomeGridStyles>
    </>
  )
}
