require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)
const fetch = require("isomorphic-fetch")
const { createFilePath } = require("gatsby-source-filesystem")

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

async function turnBikePicsIntoPages({ graphql, actions }) {
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

async function turnBuildsIntoPages({ graphql, actions }) {
  const buildTemplate = path.resolve("./src/templates/MiniBuild.js")

  const { data } = await graphql(`
    query {
      builds: allSanityMiniBuild {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  data.builds.nodes.forEach(build =>
    actions.createPage({
      path: `/builds/${build.slug.current}`,
      component: buildTemplate,
      context: {
        slug: build.slug.current,
      },
    })
  )
}

async function turnBlogsIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      blogs: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  data.blogs.edges.forEach(blog => {
    actions.createPage({
      path: blog.node.fields.slug,
      component: path.resolve("./src/templates/Blog.js"),
      context: {
        slug: blog.node.fields.slug,
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

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async params => {
  await Promise.all([
    turnProjectsIntoPages(params),
    turnTechnologiesIntoPages(params),
    turnBikePicsIntoPages(params),
    turnBuildsIntoPages(params),
    turnBlogsIntoPages(params),
  ])
}
