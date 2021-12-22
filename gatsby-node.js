const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

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
exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log("fix create node")
}

exports.createPages = async params => {
  await turnProjectsIntoPages(params)
}
