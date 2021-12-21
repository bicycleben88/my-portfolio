require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Benjamin A. Higginbotham",
    description: "I ride bikes in Lycra. I write code in JavaScript.",
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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
