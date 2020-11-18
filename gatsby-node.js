const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')
const { createRemoteFileNode } = require("gatsby-source-filesystem")




const createPages = require(`./gatsby/createPages`)
const createPosts = require(`./gatsby/createPosts`)
const createCategories = require(`./gatsby/createCategories`)
const createSolutions = require(`./gatsby/createSolutions`)
const createProducts = require(`./gatsby/createProducts`)
const createCasestudies = require(`./gatsby/createCasestudies`)  
const createTags = require(`./gatsby/createTags`)
//const createUsers = require(`./gatsby/createUsers`)

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql })
  await createPosts({ actions, graphql })
  await createCategories({ actions, graphql })
  await createSolutions({ actions, graphql })
  await createProducts({ actions, graphql })
  await createCasestudies({ actions, graphql })
  await createTags({ actions, graphql })
  //await createUsers({ actions, graphql })
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