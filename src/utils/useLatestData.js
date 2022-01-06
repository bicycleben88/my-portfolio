import { useState, useEffect } from "react"

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
        query: `
                query {
                    PageSettings(id: "BensPortfolio") {
                    name
                    project {
                      name
                    }
                    bikePictures {
                      name
                    }
                    miniBuild {
                      name
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
