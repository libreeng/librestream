const _ = require('lodash')
const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')
    
const path = require('path')


module.exports = async ({ actions, graphql }) => {
  const GET_USERS = `
  query thisQuery($first:Int, $after:String){
    wpcontent {
      users(first: $first, after: $after){
        edges {
          node {
            uri
            id   
            posts {
              nodes {
                id
                status
              }
            }   
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
  const allUsers  = []
  const fetchUsers  = async variables =>
    await graphql(GET_USERS, variables).then(({ data }) => {
      //console.log(">>>>> Got users ",data)
      const {
        wpcontent: {
          users: {
            edges,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data



      edges.map(page => {
        allUsers.push(page)
      })

      const usersWithPosts =
        process.env.NODE_ENV === 'production'
          ? allUsers // getOnlyPublished(allUsers) (not working)
          : allUsers

      console.log(">>>>> publishedUsers.length ",usersWithPosts.length)
      if (hasNextPage) {
        return fetchUsers({ first: variables.first, after: endCursor })
      }
      return usersWithPosts
    })

  await fetchUsers({ first: 100, after: null }).then(allUsers => {
    const userTemplate = path.resolve(`./src/templates/author.js`)

    allUsers.map(user => {
      console.log(`create user: ${user.node.uri}`)
      createPage({
        path: user.node.uri,
        component: userTemplate,
        context: user.node,
      })
    })
  })
}