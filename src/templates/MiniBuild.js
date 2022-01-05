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
`

export default function MiniBuild({ data }) {
  const { singleBuild } = data
  return (
    <MiniBuildStyles>
      <Image {...singleBuild.image} />
      <h2>{singleBuild.name}</h2>
      <p>{singleBuild.description}</p>
      <a href={singleBuild.video}>Watch a video walkthru</a>
      <a href={singleBuild.url}>View the code in live on codepen</a>
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
