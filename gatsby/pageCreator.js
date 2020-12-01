const _ = require('lodash')
const fs = require('fs')
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
  const includeAcfTemplate = (postName == 'pages') ? 'acfTemplate {pageTemplate}' : '';
  const GET_POSTS  = `
  query myQuery($first:Int, $after:String){
    wpcontent {
      ${postName}(first: $first, after: $after){
        edges {
          node {
            uri
            id    
            ${filterOnStatusOrCount} 
            ${includeAcfTemplate}        
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
  
  
  const getPostTemplate = (postName,template = null) => {
    let postTemplate = path.resolve(`./src/templates/${postName}.js`)
    if(template && template.pageTemplate ){
      try {
        if (fs.existsSync(`./src/templates/pageTemplates/${template.pageTemplate}.js`)) {
          postTemplate = path.resolve(`./src/templates/pageTemplates/${template.pageTemplate}.js`)
          console.info("CUSTOM PAGE TEMPLATE: ",postTemplate)
        } else {
          console.warn(`Template File ./src/templates/pageTemplates/${template.pageTemplate}.js DOES NOT EXISTS`)
        }
      } catch(err) {
        console.error(`ERROR LOOKING FOR TEMPLATE ./src/templates/pageTemplates/${template.pageTemplate}.js `)
      }   
    }
    return postTemplate;
  }


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

      //console.log(">>>>> edges.length ",edges.length)
      edges.map(post => {
        allPosts.push(post)
      })

      const publishedPosts =
        process.env.NODE_ENV === 'production'
          ? excludeHiddenPosts(allPosts,filterOnStatusOrCount)
          : allPosts

      //console.log(">>>>> publishedPosts.length ",allPosts.length, variables)
      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: variables.first, after: endCursor })
      }
      //console.log("NO MORE PAGES")
      return publishedPosts
    })

  await fetchPosts({ first: postsPerPage, after: null }).then(allPosts => {
    
     
    if(allPosts){
      allPosts.map(post => {
        const postTemplate = getPostTemplate(postName,post.node.acfTemplate);
        //console.log("TEMPLATE: " + postTemplate);
        createPage({
          path: post.node.uri,
          component: postTemplate,
          context: post.node,
        })
      })
    } else {
      //console.log(`There are no ${postName} to build!`);
    }

    if(blogPages){
      blogPages.map(blogPage => {
        //console.log(`Pagination for ${postName}: ${blogPage.context.pageNumber}`)
        createPage(blogPage)
      })
    }
  })


  
}