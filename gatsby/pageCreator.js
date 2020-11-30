const _ = require('lodash')
const path = require('path')

const excludeHiddenPosts = (edges,filterOnStatusOrCount) => {  
  switch(filterOnStatusOrCount) {
    case 'status':
      return _.filter(edges, ({ node }) => node.status === 'publish')
    case 'count':
      return _.filter(edges, ({ node }) => node.count > 0)
    default:
      return edges;
  }
}
    

// This can be added to the query to speed up build time for development.
// , where: {dateQuery: {after: {month: 10, year: 2020, day: 1}}}
module.exports = async ({ actions, graphql }, postName, pagePrefix = null, createArchivePage = false, postsPerPage = 21, filterOnStatusOrCount='') => {
  if(pagePrefix == null) pagePrefix = postName
  const GET_POSTS  = `
  query myQuery($first:Int, $after:String){
    wpcontent {
      ${postName}(first: $first, after: $after){
        edges {
          node {
            uri
            id    
            ${filterOnStatusOrCount}        
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
      const edges = data.wpcontent[postName].edges
      const hasNextPage = data.wpcontent[postName].pageInfo.hasNextPage
      const endCursor = data.wpcontent[postName].pageInfo.endCursor

      const blogTemplate = path.resolve(`./src/templates/${postName}Listing.js`)
      
      if(createArchivePage){
        const blogPagePath = !variables.after ? `/${pagePrefix}` : `/${pagePrefix}/${pageNumber+1}`
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
      }

      console.log(">>>>> edges.length ",edges.length)
      edges.map(post => {
        allPosts.push(post)
      })

      const publishedPosts =
        process.env.NODE_ENV === 'production'
          ? excludeHiddenPosts(allPosts,filterOnStatusOrCount)
          : allPosts

      console.log(">>>>> publishedPosts.length ",allPosts.length, variables)
      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: variables.first, after: endCursor })
      }
      console.log("NO MORE PAGES")
      return publishedPosts
    })

  await fetchPosts({ first: postsPerPage, after: null }).then(allPosts => {
    
    const postTemplate = path.resolve(`./src/templates/${postName}.js`)
     
    if(allPosts){
      allPosts.map(post => {
        console.log(`create page for ${postName}: ${post.node.uri}`)
        createPage({
          path: post.node.uri,
          component: postTemplate,
          context: post.node,
        })
      })
    } else {
      console.log(`There are no ${postName} to build!`);
    }

    if(blogPages){
      blogPages.map(blogPage => {
        console.log(`Pagination for ${postName}: ${blogPage.context.pageNumber}`)
        createPage(blogPage)
      })
    }
  })
}