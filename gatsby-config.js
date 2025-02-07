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
        url: process.env.WPGRAPHQL_URL || 'https://cms.librestream.com/graphql',
        develop: {
          hardCacheMediaFiles: true,
          // hardCacheData: true
        },
        production: {
          hardCacheMediaFiles: true,
          // hardCacheData: true
        },
        type: {
          MediaItem: {
            localFile: {
              maxFileSizeBytes: 1048576000, // 1GB
              requestConcurrency: process.env.GATSBY_MEDIA_REQUEST_CONCURRENCY || 100, // Default 100. Amount of images to download concurrently. Try lowering this if wordpress server crashes on import.
            },
          },
        },
        schema: {
          // perPage: 5,
          requestConcurrency: 5, // currently set to 15
          // previewRequestConcurrency: 2, // currently set to 5
          timeout: 3000000,
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

    // NOTE: I could not get the live algolia account to work on my local machine. Only the develpoment one. Perhaps this has something to do with restrictions on API Keys? ~paul
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries: require("./src/fragments/searches/algolia-queries"),
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
        },
        enablePartialUpdates: true, // default: false
        matchFields: ['slug', 'modified'], // Array<String> default: ['modified']
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
        name: 'site',

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
          path.resolve(__dirname, 'src/fragments/searches/searchSiteQuery.graphql'),
          'utf-8',
        ),

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'url',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['url', 'title', 'description', 'tags'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['url', 'title', 'description', 'mainImage', 'summaryImage'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) => {
          const pageData = data.allWpPage.nodes.map(node => ({
            url: node.uri,
            title: node.title,
            nodeType: node.nodeType,
            description: node.content,
            excerpt: 'page excerpt will go here',
            tags: null,
          }));
          const postData = data.allWpPost.nodes.map(node => ({
            url: node.uri,
            title: node.title,
            nodeType: node.categories.nodes[0].name,
            description: node.content,
            excerpt: node.excerpt,
            tags: node.tags.nodes.map(tag => tag.name),
          })); 
          
          const csData = data.allWpCaseStudy.nodes.map(node => ({
            url: node.uri,
            title: node.title,
            nodeType: node.nodeType,
            description: node.content, // can we combine this with other fields? i.e. node.acfPostTypeUseCase.articleTitle
            excerpt: node.content,
            tags: null,           
          })); 
          
          const solutionData = data.allWpSolution.nodes.map(node => ({
            url: node.uri,
            title: node.title,
            nodeType: node.nodeType,
            description: node.content, // can we combine this with other fields? i.e. node.acfIntro.introDescription
            excerpt: node.content,
            tags: null,           
          })); 
     
          return [
            ...pageData,
            ...postData,
            ...csData,
            ...solutionData
          ]     
        }
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'posts',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: fs.readFileSync(
          path.resolve(__dirname, 'src/fragments/searches/searchPostsQuery.graphql'),
          'utf-8',
        ),
        ref: 'url',
        index: ['url', 'title', 'description', 'tags'],
        store: ['url', 'title', 'description', 'mainImage'],
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
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        headers: {
          "/*": [
            "X-Frame-Options: SAMEORIGIN",
          ],
        },
      },
      
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        generateStatsFile: true
      },
      
    },
    {
      // Removes unused css rules
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: true, // Enable while using `gatsby develop`
        purgeOnly: ['/main.scss'], // Purge only the main css file
        // printRejected: true,
        // printAll: true,
        // debug: true;
        // printSummary: true,
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          safelist: [/^modal/, /^accordion/, /^card/,/^tab/, /^navbar/, /^nav/, /^button/, /^carousel/, /^wf-/,/^slick-/,/^col_/,/^col-/,/^tns-/,'em','remixicon-icon', /^required/],
        },
      },
    }, // must be after other CSS plugins
  ],
}
