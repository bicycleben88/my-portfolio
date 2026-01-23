require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Ben's Portfolio",
    description: "A compendium of my coding work",
    siteUrl: "https://higginbotham.fun",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "j0etx6fw",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: "j0etx6fw",
        dataset: "production",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
