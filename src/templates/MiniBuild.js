import { graphql } from "gatsby"
import React from "react"
import Image from "gatsby-plugin-sanity-image"
import styled from "styled-components"

const MiniBuildStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-transform: capitalize;
    text-decoration: underline;
    margin-top: 2rem;
  }
  img {
    height: 400px;
    width: 100%;
    object-fit: contain;
    background-color: var(--grey);
    padding: 1rem 0;
  }
  @media (max-width: 500px) {
    img {
      height: 200px;
    }
  }
`

export default function MiniBuild({ data }) {
  const { singleBuild } = data
  return (
    <MiniBuildStyles>
      <h2>{singleBuild.name}</h2>
      <Image {...singleBuild.image} />
      <a href={singleBuild.video}>Video walkthru</a>
      <a href={singleBuild.url}>Live on codepen</a>
      <p>{singleBuild.description}</p>
    </MiniBuildStyles>
  )
}

export const query = graphql`
  query SingleBuildQuery($slug: String!) {
    singleBuild: sanityMiniBuild(slug: { current: { eq: $slug } }) {
      name
      id
      description
      name
      url
      video
      image {
        ...ImageWithPreview
        asset {
          url
        }
      }
    }
  }
`
