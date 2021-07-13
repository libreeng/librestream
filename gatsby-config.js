require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
const fs = require('fs')
const path = require('path')
const website = require('./config/website')

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  flags: { 
    //FAST_DEV: true,
    //PRESERVE_WEBPACK_CACHE: true,
    //PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    description: website.description,
    shareImage: website.shareImage,
    headline: website.headline,
    inLanguage: website.inLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL,
        // develop: {
        //   hardCacheMediaFiles: true,
        //   // hardCacheData: true
        // },
        // production: {
        //   hardCacheMediaFiles: true,
        //   // hardCacheData: true
        // },
        type: {
          MediaItem: {
            localFile: {
              maxFileSizeBytes: 1048576000, // 1GB
              requestConcurrency: 5, // Default 100. Amount of images to download concurrently. Try lowering this if wordpress server crashes on import.
            },
          },
        },
        schema: {
          // perPage: 5,
          requestConcurrency: 5, // currently set to 15
          // previewRequestConcurrency: 2, // currently set to 5
          timeout: 300000,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: website.url,
        sitemap: `${website.url}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
        output: '/robots.txt'
      }
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
        store: ['url', 'title', 'description', 'mainImage', 'summaryImage'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allWpPost.nodes.map(node => ({
            url: node.uri,
            title: node.title,
            description: node.content,
            mainImage: node.acfPostTypeNews.mainImage,
            summaryImage: node.acfPostTypeNews.summaryImage,
            tags: node.tags.nodes.map(tag => tag.name),
          })),
      },
    },
    'gatsby-plugin-sitemap',  
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ['DIN Next LT Pro'],
          urls: ['/fonts/fonts.css']
        },
        classes: true, 
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W3BZNJ2",
        includeInDevelopment: false,
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
        icon: 'static/img/favicon.png'
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        generateStatsFile: true
      },
    },
  ],
}
