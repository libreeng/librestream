const _ = require('lodash')
const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')
    
const path = require('path')


module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
  query myQuery($first:Int, $after:String){
    wpcontent {
      pages(first: $first, after: $after){
        edges {
          node {
            status
            uri
            slug
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
  const allPages = []
  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      //console.log(">>>>> Got Pages ",data)
      const {
        wpcontent: {
          pages: {
            edges,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data
      
      edges.map(page => {
        allPages.push(page)
      })

      const publishedPages =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPages)
          : allPages

      console.log(">>>>> publishedPages.length ",publishedPages.length)
      if (hasNextPage) {
        return fetchPages({ first: variables.first, after: endCursor })
      }
      return publishedPages
    })

  await fetchPages({ first: 100, after: null }).then(allPages => {
    const pageTemplate = path.resolve(`./src/templates/page.js`)

    allPages.map(page => {
      console.log(`create page: ${page.node.uri}`)
      createPage({
        path: page.node.uri,
        component: pageTemplate,
        context: page.node,
      })
    })
  })
}