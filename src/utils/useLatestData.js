import { useState, useEffect } from "react"

const gql = String.raw

const details = gql`
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`

export default function useLatestData() {
  const [homeProjects, setHomeProjects] = useState()
  const [homeBuilds, setHomeBuilds] = useState()
  const [homePics, setHomePics] = useState()

  useEffect(function () {
    fetch(process.env.GATSBY_SANITY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gql`
          query {
            PageSettings(id: "BensPortfolio") {
              name
              project {
               ${details}
              }
              bikePictures {
                ${details}
              }
              miniBuild {
                ${details}
              }
            }
          }
        `,
      }),
    })
      .then(res => res.json())
      .then(res => {
        const { PageSettings } = res.data
        setHomeProjects(PageSettings.project)
        setHomePics(PageSettings.bikePictures)
        setHomeBuilds(PageSettings.miniBuild)
      })
  }, [])
  return {
    homeBuilds,
    homePics,
    homeProjects,
  }
}
