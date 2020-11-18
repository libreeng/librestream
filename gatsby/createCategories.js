const _ = require('lodash')
const getOnlyIfHasCount = edges =>
  _.filter(edges, ({ node }) => node.count > 0)
    
const path = require('path')


module.exports = async ({ actions, graphql }) => {
  const GET_CATEGORIES = `
  query thisQuery($first:Int, $after:String){
    wpcontent {
      categories(first: $first, after: $after){
        edges {
          node {
            uri
            id   
            count     
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
  const allTags  = []
  const categoryPages = []
  let pageNumber = 0
  const fetchTags  = async variables =>
    await graphql(GET_CATEGORIES, variables).then(({ data }) => {
      //console.log(">>>>> Got Categories ",data)
      const {
        wpcontent: {
          categories: {
            edges,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data



      edges.map(page => {
        allTags.push(page)
      })

      const publishedTags =
        process.env.NODE_ENV === 'production'
          ? getOnlyIfHasCount(allTags)
          : allTags

      console.log(">>>>> publishedTags.length ",publishedTags.length)
      if (hasNextPage) {
        return fetchTags({ first: variables.first, after: endCursor })
      }
      return publishedTags
    })

  await fetchTags({ first: 100, after: null }).then(allTags => {
    const tagTemplate = path.resolve(`./src/templates/category.js`)

    allTags.map(tag => {
      console.log(`create category: ${tag.node.uri}`)
      createPage({
        path: tag.node.uri,
        component: tagTemplate,
        context: tag.node,
      })
    })
  })
}