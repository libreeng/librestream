const _ = require('lodash')
const path = require('path')
const { createFilePath, createRemoteFileNode } = require('gatsby-source-filesystem')


const pageCreator = require(`./gatsby/pageCreator`)
exports.createPages = async ({ actions, graphql }) => {
  await pageCreator({ actions, graphql }, 'pages', '', false, 21, 'status')
  /*
  await pageCreator({ actions, graphql }, 'posts', 'news', true)
  await pageCreator({ actions, graphql }, 'products', 'products', true)
  await pageCreator({ actions, graphql }, 'caseStudies', 'use-cases', true)
  await pageCreator({ actions, graphql }, 'solutions', 'solutions', true)  
  await pageCreator({ actions, graphql }, 'categories', 'category', false, null, 'count')
  await pageCreator({ actions, graphql }, 'tags', 'tag', false, 100, 'count')
  */
  //await pageCreator({ actions, graphql }, 'users', 'author', false, 100)
}




exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}





exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode, touchNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }
          console.log(" > Generating Image: "+ sourceUrl)

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
            /*
            auth: {
              htaccess_user: process.env.BASIC_AUTH_USER,
              htaccess_pass: process.env.BASIC_AUTH_PASS,
            },
            */
          })
        },
      },
    },
  })
}