module.exports = {
  siteMetadata: {
    title: `Pura`,
    description: `Pura is an opinionated, but lightweight Gatsby starter kit.`,
    author: `@trendyminds`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pura`,
        short_name: `pura`,
        start_url: `/`,
        background_color: `#333c45`,
        theme_color: `#333c45`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ]
};
