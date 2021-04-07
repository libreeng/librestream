const fs = require('fs')
const path = require('path')
const website = require('./config/website')

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  flags: {},
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-recaptcha',
    // 'gatsby-plugin-sitemap',
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL || `https://librestreamcms.kinsta.cloud/graphql`,
        // schema: {
        //   perPage: 5,
        //   requestConcurrency: 5, // currently set to 15
        //   previewRequestConcurrency: 2, // currently set to 5
        // }
        // useACF: true,
        // type: {
        //   Post: {
        //     limit:
        //       process.env.NODE_ENV === `development`
        //         ? // Lets just pull 50 posts in development to make it easy on ourselves.
        //         50
        //         : // And all posts in production
        //         null,
        //   },
        //   MediaItem: {
        //     localFile: {
        //       requestConcurrency: 50
        //     }
        //   }
        // },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Librestream`,
        short_name: `Librestream`,
        start_url: `/`,
        background_color: `#014168`,
        theme_color: `#014168`,
        display: `standalone`,
        icon: 'src/img/favicon.png'
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   // Removes unused css rules
    //   resolve: 'gatsby-plugin-purgecss',
    //   options: {
    //     // Activates purging in gatsby develop
    //     develop: true,
    //     // Purge only the main css file
    //     purgeOnly: ['/main.scss'],
    //     printAll: true,
    //     printRejected: true,
    //     // whitelist: () => ['html', 'body', 'collapse', 'collapsing'], // ERRORED: "gatsby-plugin-purgecss" threw an error while running the onCreateWebpackConfig lifecycle: userOptions.whitelist is not iterable
    //     whitelistPatterns: () => [/modal*/, /accordion*/, /card*/, /navbar*/],
    //     whitelistPatternsChildren: () => [/modal*/, /accordion*/, /card*/, /navbar*/]
    //   },
    // }, // must be after other CSS plugins
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID
        },
      },
    },

    // You can have multiple instances of this plugin to create indexes with
    // different names or engines. For example, multi-lingual sites could create
    // an index for each language.
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'posts',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: 'speed',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: fs.readFileSync(
          path.resolve(__dirname, 'src/searchQuery.graphql'),
          'utf-8',
        ),

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'url',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['url', 'title', 'content', 'tags'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['url', 'title', 'description', 'mainImage'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allWpPost.nodes.map(node => ({
            url: node.uri,
            title: node.title,
            description: node.content,
            // featuredImage: node.acfPostTypeNews.mainImage.localFile.childImageSharp,
            mainImage: node.acfPostTypeNews.mainImage,
            tags: node.tags.nodes.map(tag => tag.name),
          })),
      },
    },
  ],
}
