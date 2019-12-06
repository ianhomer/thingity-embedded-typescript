module.exports = {
  siteMetadata: {
    title: `Thingity Embedded JavaScript`,
    description: `Thingity Embedded JavaScript.`,
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
    `gatsby-transformer-remark`
  ],
}
