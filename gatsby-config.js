const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // baseUrl: '13.233.207.247/',
        // The base url to your WP site.
        // baseUrl: 'mtv.ahx.mybluehost.me/verinite/',
        // baseUrl: 'http://localhost/verinite',
        baseUrl: 'admin.verinite.com/',

        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        includedRoutes: [
          '/*/*/posts',
          '/*/*/pages',
          '/*/*/media',
          '/*/*/menus',
          '/*/*/leaders',
          '/*/*/leaders',
          '/*/*/jobs',
          '/*/*/service',
          '/*/*/service_type',
          '/*/*/designation',
          '/*/*/service_products',
          '/*/*/service_categories',
          '/*/*/users',
          '/*/*/categories',
          '/*/*/portfolio',
          '/*/*/testimonials',
          '/*/*/tags',
          '/*/*/technologies',
          '/*/*/application_stack',
          '/*/*/news_and_events',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: path.join(__dirname, 'src/img/gatsby'),
      },
    },
    'gatsby-plugin-image',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // Removes unused css rules
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.scss'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
