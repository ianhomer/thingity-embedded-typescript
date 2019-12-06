module.exports = {
  siteMetadata: {
    title: `Thingity Embedded TypeScript`,
    description: `Thingity Embedded TypeScript.`,
    author: `Ian`,
  },
  plugins: [
    {
      options: {
        name: `content`,
        path: `${__dirname}/content`
      },
      resolve: `gatsby-source-filesystem`,
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`
  ],
}
