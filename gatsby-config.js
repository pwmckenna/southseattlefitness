module.exports = {
  siteMetadata: {
    title: `South Seattle Fitness`,
    description: `South Seattle Home offers FIT4MOM classes, including HIIT, stroller based exercises, pre and post-natal classes, as well as restorative or vinyasa yoga classes. Come join us at our studio in south Beacon Hill.`,
    author: `@southseattlefitness`,
    siteUrl: 'https://southseattlefitness.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-132688472-1'
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '397844000782224',
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
