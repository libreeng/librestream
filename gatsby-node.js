/* eslint-disable consistent-return */
const path = require(`path`)
const chunk = require(`lodash/chunk`)

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)





/**
 * This function creates all the individual standalone pages in this site
 */
const createStandalonePages = async ({ pages, gatsbyUtilities }) =>
  Promise.all(
    pages.map(page => {
      if (!page) return

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      return gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: page.uri,

        // use the page template as the page component
        component: path.resolve(`./src/templates/standalone/${page.template.templateName.replace(/\s+/g, '')}.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: page.id,

        },
      })


    })
  )

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: post.uri,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/${post.nodeType}.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,

          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  )

/**
 * This function creates all the individual blog pages in this site
 */
async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // Since our homepage is our blog page
          // we want the first page to be "/" and any additional pages
          // to be numbered.
          // "/blog/2" for example
          return page === 1 ? `/` : `/blog/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/blog-post-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            uri
            nodeType
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
      # Query all WordPress blog posts sorted by date
      allWpCaseStudy(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            uri
            nodeType
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  const news = graphqlResult.data.allWpPost.edges
  const casestudies = graphqlResult.data.allWpCaseStudy.edges

  const posts = [
    ...news,
    ...casestudies
  ]

  return posts
}

async function getPages({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPages {
      # Query all WordPress blog posts sorted by date
      allWpPage(sort: { fields: [date], order: DESC }) {
        nodes {
          id
          uri
          template {
            templateName
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }
  // console.log(graphqlResult.data.allWpPage.nodes)
  const pages = graphqlResult.data.allWpPage.nodes

  return pages
}



/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Query our posts from the GraphQL server
  const posts = await getPosts(gatsbyUtilities)
  const pages = await getPages(gatsbyUtilities)


  // Create pages for each post and standalone page
  await createIndividualBlogPostPages({ posts, gatsbyUtilities })
  await createStandalonePages({ pages, gatsbyUtilities })

  // Paginated archives
  // await createBlogPostArchive({ posts, gatsbyUtilities })
}



// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }


// exports.createResolvers = async (
//   {
//     actions,
//     cache,
//     createNodeId,
//     createResolvers,
//     store,
//     reporter,
//   },
// ) => {
//   const { createNode, touchNode } = actions
//   // const postType = {
//   //   type: "String",
//   //   resolve(source, args, context, info) {
//   //     return source.firstName + " " + source.name
//   //   },
//   // }


//   // await createResolvers({
//   //   WPGraphQL_MediaItem: {
//   //     imageFile: {
//   //       type: "File",
//   //       async resolve(source) {
//   //         let sourceUrl = source.sourceUrl

//   //         if (source.mediaItemUrl !== undefined) {
//   //           sourceUrl = source.mediaItemUrl
//   //         }
//   //         console.log(" > Generating Image: " + sourceUrl)

//   //         return await createRemoteFileNode({
//   //           url: encodeURI(sourceUrl),
//   //           store,
//   //           cache,
//   //           createNode,
//   //           createNodeId,
//   //           reporter,
//   //           /*
//   //           auth: {
//   //             htaccess_user: process.env.BASIC_AUTH_USER,
//   //             htaccess_pass: process.env.BASIC_AUTH_PASS,
//   //           },
//   //           */
//   //         })
//   //       },
//   //     },
//   //   },
//   // })
// }
