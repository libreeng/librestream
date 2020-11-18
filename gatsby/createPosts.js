const _ = require('lodash')
const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')
    
const path = require('path')
const PostsPerPage = 21
// This can be added to the query to speed up build time for development.
// , where: {dateQuery: {after: {month: 10, year: 2020, day: 1}}}
module.exports = async ({ actions, graphql }) => {
  const GET_POSTS  = `
  query myQuery($first:Int, $after:String){
    wpcontent {
      posts(first: $first, after: $after){
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
  const blogPages = []
  let pageNumber = 0
  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpcontent: {
          posts: {
            edges,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const blogTemplate = path.resolve(`./src/templates/postListing.js`)
      const blogPagePath = !variables.after ? `/news` : `/news/${pageNumber+1}`
      blogPages[pageNumber] = {
        path: blogPagePath,
        component: blogTemplate,
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

      console.log(">>>>> publishedPosts.length ",publishedPosts.length)
      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: variables.first, after: endCursor })
      }
      return publishedPosts
    })

  await fetchPosts({ first: PostsPerPage, after: null }).then(allPosts => {
    const postTemplate = path.resolve(`./src/templates/post.js`)

    blogPages.map(blogPage => {
      console.log(`createBlogPage ${blogPage.context.pageNumber}`)
      createPage(blogPage)
    })

    allPosts.map(post => {
      console.log(`create post: ${post.node.uri}`)
      createPage({
        path: post.node.uri,
        component: postTemplate,
        context: post.node,
      })
    })
  })
}