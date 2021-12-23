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

exports.createPages = async params => {
  await Promise.all([
    turnProjectsIntoPages(params),
    turnTechnologiesIntoPages(params),
  ])
}
