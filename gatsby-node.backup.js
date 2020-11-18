const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')
const { createRemoteFileNode } = require("gatsby-source-filesystem")




const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      wpcontent {
        pages(first: 999){
          edges {
            node {
              status
              uri
              slug
              id
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/page.js`)

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allPages = result.data.wpcontent.pages.edges
      const pages =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPages)
          : allPages

      // Call `createPage()` once per WordPress page
      _.each(pages, ({ node: page }) => {
        //console.log(">>>>>>>> " + page.uri);
        createPage({
          path: page.uri,
          component: pageTemplate,
          context: {
            id: page.id,
          },
        })
      })
    })


    /* SOLUTIONS CUSTOM POST TYPE */
    .then(() => {
      return graphql(`
        {
          wpcontent {
            solutions(first: 999){
              edges {
                node {
                  id
                  slug
                  status
                  uri
                }
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const solutionsTemplate = path.resolve(`./src/templates/solution.js`)

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allSolutions = result.data.wpcontent.solutions.edges

      const solutions =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allSolutions)
          : allSolutions

      // Call `createPage()` once per WordPress page
      _.each(solutions, ({ node: page }) => {
        //console.log("****** " + page.uri);
        createPage({
          path: page.uri,
          component: solutionsTemplate,
          context: {
            id: page.id,
          },
        })
      })
    })



    /* CASE STUDIES CUSTOM POST TYPE */
    .then(() => {
      return graphql(`
        {
          wpcontent {
            caseStudies(first: 999){
              edges {
                node {
                  id
                  slug
                  status
                  uri
                }
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const caseStudyTemplate = path.resolve(`./src/templates/use_case.js`)

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allcaseStudies = result.data.wpcontent.caseStudies.edges

      const caseStudies =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allcaseStudies)
          : allcaseStudies

      // Call `createPage()` once per WordPress page
      _.each(caseStudies, ({ node: page }) => {
        //console.log("****** " + page.uri);
        createPage({
          path: page.uri,
          component: caseStudyTemplate,
          context: {
            id: page.id,
          },
        })
      })
    })


    /* POSTS */
    .then(() => {
      return graphql(`
        {
          wpcontent {
            posts {
              edges {
                node {
                  id
                  uri
                  slug
                  status
                }
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const postTemplate = path.resolve(`./src/templates/post.js`)
      const blogTemplate = path.resolve(`./src/templates/blog.js`)

      // In production builds, filter for only published posts.
      const allPosts = result.data.wpcontent.posts.edges
      const posts =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPosts)
          : allPosts

      // Iterate over the array of posts
      _.each(posts, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: post.uri,
          component: postTemplate,
          context: {
            id: post.id,
          },
        })
      })

      // Create a paginated blog listing, e.g., /news, /news/2, /news/3  
      /*    
      paginate({
        createPage,
        items: posts,
        itemsPerPage: 10,
        pathPrefix: '/news',
        component: blogTemplate,
      })
      */
     
    })
    

    

    /* CATEGORIES */
    .then(() => {
      return graphql(`
        {
          wpcontent {
            categories(first: 999) {
              edges {
                node {
                  id
                  uri
                }
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const categoriesTemplate = path.resolve(`./src/templates/category.js`)

      // Create a Gatsby page for each WordPress Category
      _.each(result.data.wpcontent.categories.edges, ({ node: cat }) => {
        createPage({
          path: cat.uri,
          component: categoriesTemplate,
          context: {
            id: cat.id,
          },
        })
      })
    })


   
    
    /* TAGS */
    .then(() => {
      return graphql(`
        {
          wpcontent {
            tags(first: 999) {
              edges {
                node {
                  id
                  uri
                }
              }
            }
          }
        }
      `)
    })

    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const tagsTemplate = path.resolve(`./src/templates/tag.js`)

      // Create a Gatsby page for each WordPress tag
      _.each(result.data.wpcontent.tags.edges, ({ node: tag }) => {
        createPage({
          path: tag.uri,
          component: tagsTemplate,
          context: {
            id: tag.id,
          },
        })
      })
    })




    /* USERS */
    /*
    .then(() => {
      return graphql(`
        {
          wpcontent {
            users (first: 999){
              edges {
                node {
                  id
                  name
                  slug
                  uri
                }
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const authorTemplate = path.resolve(`./src/templates/author.js`)

      _.each(result.data.wpcontent.users.edges, ({ node: author }) => {//
        createPage({
          path: author.uri,
          component: authorTemplate,
          context: {
            id: author.id,
          },
        })
      })
    })
    */
    
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








/** experimental. Still figuring this one out. */
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