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
  h1 {
    margin-top: 2.5rem;
  }
  @media (max-width: 850px) {
    h1 {
      font-size: 3rem;
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
        <p>
          I’m an ex-bartender and current average cyclist who put down cocktails
          and picked up computers. A bootcamp taught me front-end web
          development in 2020, when I mastered HTML, CSS, and JavaScript. I know
          React and Gatsby, the fancy frameworks and libraries used to make this
          slick site.{" "}
          <a href="https://www.prestonmitchum.com" target="#">
            Here's a recent build of mine.
          </a>{" "}
          In 2022 I took a role providing application support for core banking
          software distributed to 100+ credit unions and 25 SaaS clients. It’s
          as interesting as it sounds. In 2024 I went back to school to study
          Computer Science and I’m happy to report that so far that’s going
          really well. Will I beat AI to a job before I graduate? .
        </p>
        <p>
          You can <Link to="/projects">see all of my projects</Link>, where I
          have both full stack and single page, front-end web applications.
          There are <Link to="/builds">mini builds here</Link>, where I use
          vanilla JavaScript to create really neat front-end features. Don't
          forget <Link to="/bikes">to look at some pictures</Link> of a cross
          country bicycle trip I took. Below is a little sample of my work.
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
