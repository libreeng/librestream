module.exports = {
  flags: {},
  siteMetadata: {
    title: `Librestream Website`,
    description: `Enter in default site meta description...`,
    lang: `en`,
    author: `@ocupop`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
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
        url:
          process.env.WPGRAPHQL_URL ||
          `https://librestreamcms.kinsta.cloud/graphql`,
      },
    },

    {
      resolve: "gatsby-source-graphql",
      options: {
        // Remote schema query type. This is an arbitrary name.
        typeName: "WPGraphQL",
        // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
        fieldName: "wpcontent",
        // GraphQL endpoint, relative to your WordPress home URL.
        url: "https://librestreamcms.kinsta.cloud/graphql",

        // HTTP headers
        // https://github.com/wp-graphql/wp-graphql-jwt-authentication
        /*
        headers: {
          Authorization: `Bearer ${process.env.AUTHORIZATION_TOKEN}`,
        },
        */
      },
    },

    {
      resolve: 'gatsby-wpgraphql-inline-images', // https://www.gatsbyjs.com/plugins/gatsby-wpgraphql-inline-images/
      options: {
        wordPressUrl: 'https://librestreamcms.kinsta.cloud',
        uploadsUrl: 'https://librestreamcms.kinsta.cloud/media',
        processPostTypes: ['Page', 'Post', 'product'],
        graphqlTypeName: 'WPGraphQL',
        /*
        httpHeaders: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }
        */
      },
    },

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/main.scss'],
        printAll: true,
        printRejected: true,
        // whitelist: () => ['html', 'body', 'collapse', 'collapsing'], // ERRORED: "gatsby-plugin-purgecss" threw an error while running the onCreateWebpackConfig lifecycle: userOptions.whitelist is not iterable
        whitelistPatterns: () => [/modal*/, /accordion*/, /card*/, /navbar*/],
        whitelistPatternsChildren: () => [/modal*/, /accordion*/, /card*/, /navbar*/]
      },
    }, // must be after other CSS plugins
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
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
