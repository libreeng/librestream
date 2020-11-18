const _ = require('lodash')
const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')
    
const path = require('path')
const PostsPerPage = 21


module.exports = async ({ actions, graphql }) => {
  const GET_POSTS  = `
  query myQuery($first:Int, $after:String){
    wpcontent {
      caseStudies(first: $first, after: $after){
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
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpcontent: {
          caseStudies: {
            edges,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const thisTemplate = path.resolve(`./src/templates/caseStudyListing.js`)
      const blogPagePath = !variables.after ? `/use_cases` : `/use_cases/${pageNumber+1}`

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

      console.log(">>>>> publishedCaseStudies.length ",publishedPosts.length)
      if (hasNextPage) {
        pageNumber++
        console.log("Another Page " + variables.first + " + " + endCursor);
        return fetchPosts({ first: variables.first, after: endCursor })
      }
      return publishedPosts
    })

    
    console.log("First Page " + PostsPerPage + " + null");
  await fetchPosts({ first: PostsPerPage, after: null }).then(returnArray => {
    const singleTemplate = path.resolve(`./src/templates/caseStudy.js`)

    postPageArray.map(blogPage => {
      console.log(`createCaseStudyPage ${blogPage.path}`)
      createPage(blogPage)
    })

    returnArray.map(post => {
      console.log(`create case study: ${post.node.uri}`)
      createPage({
        path: post.node.uri,
        component: singleTemplate,
        context: post.node,
      })
    })
  })
}