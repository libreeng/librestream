const _ = require('lodash')
const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')
    
const path = require('path')
const PostsPerPage = 100


module.exports = async ({ actions, graphql }) => {
  const GET_SOLUTIONS  = `
  query myQuery($first:Int, $after:String){
    wpcontent {
      solutions(first: $first, after: $after){
        edges {
          node {
            status
            uri
            id            
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  `
  const { createPage } = actions
  const allPosts = []
  const postPageArray = []
  let pageNumber = 0
  const fetchPosts = async variables =>
    await graphql(GET_SOLUTIONS, variables).then(({ data }) => {
      const {
        wpcontent: {
          solutions: {
            edges,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const thisTemplate = path.resolve(`./src/templates/solutionListing.js`)
      const blogPagePath = !variables.after ? `/solutions` : `/solutions/${pageNumber+1}`

      postPageArray[pageNumber] = {
        path: blogPagePath,
        component: thisTemplate,
        context: {
          pageNumber: pageNumber+1,
          hasNextPage: hasNextPage,
          limit: variables.first,
          endCursor: variables.after
        },
      }


      edges.map(post => {
        allPosts.push(post)
      })

      const publishedPosts =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPosts)
          : allPosts

      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: variables.first, after: endCursor })
      }
      return publishedPosts
    })

    
  await fetchPosts({ first: PostsPerPage, after: null }).then(returnArray => {
    const singleTemplate = path.resolve(`./src/templates/solution.js`)

    /**
     * Uncomment this section if you would like a high-level listing page.
    postPageArray.map(blogPage => {
      console.log(`createSolutionPage ${blogPage.path}`)
      createPage(blogPage)
    })
     */

    returnArray.map(post => {
      console.log(`create solution: ${post.node.uri}`)
      createPage({
        path: post.node.uri,
        component: singleTemplate,
        context: post.node,
      })
    })
  })
}