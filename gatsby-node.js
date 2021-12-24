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
  ])
}
