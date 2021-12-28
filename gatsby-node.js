require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)
const fetch = require("isomorphic-fetch")

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve("./src/templates/Project.js")

  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  data.projects.nodes.forEach(project =>
    actions.createPage({
      path: `/project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    })
  )
}

async function turnTechnologiesIntoPages({ graphql, actions }) {
  const techTemplate = path.resolve("./src/pages/projects.js")

  const { data } = await graphql(`
    query {
      technologies: allSanityTechnology {
        nodes {
          name
          id
        }
      }
    }
  `)

  data.technologies.nodes.forEach(tech => {
    actions.createPage({
      path: `tech/${tech.name}`,
      component: techTemplate,
      context: {
        technology: tech.name,
      },
    })
  })
}

async function turnBikePicsIntoPage({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      bikePics: allSanityBikePictures {
        totalCount
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `)

  data.bikePics.nodes.map(pic => {
    actions.createPage({
      path: `/bikes/${pic.slug.current}`,
      component: path.resolve("./src/templates/BikePic.js"),
      context: {
        slug: pic.slug.current,
      },
    })
  })

  const pageSize = 5
  const pageCount = Math.ceil(data.bikePics.totalCount / pageSize)

  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/bikes/${i + 1}`,
      component: path.resolve("./src/pages/bikes.js"),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    })
  })
}

async function fetchSimpsonsEpisodesAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const res = await fetch("https://api.sampleapis.com/simpsons/episodes")
  const episodes = await res.json()

  for (const episode of episodes) {
    const nodeMeta = {
      id: createNodeId(`episode-${episode.name}`),
      parent: null,
      children: null,
      internal: {
        type: "Episode",
        mediaType: "application/json",
        contentDigest: createContentDigest(episode),
      },
    }
    actions.createNode({
      ...episode,
      ...nodeMeta,
    })
  }
}

exports.sourceNodes = async params => {
  await Promise.all([fetchSimpsonsEpisodesAndTurnIntoNodes(params)])
}

exports.createPages = async params => {
  await Promise.all([
    turnProjectsIntoPages(params),
    turnTechnologiesIntoPages(params),
    turnBikePicsIntoPage(params),
  ])
}
