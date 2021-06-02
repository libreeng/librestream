const fs = require('fs')
const path = require('path')

function postToAlgoliaRecord({ node: { id, acfPostTypeNews, tags, seo, ...rest } }) {
  return {
    objectID: id,
    tags: tags.nodes,
    ...seo,
    image: (acfPostTypeNews && acfPostTypeNews.mainImage && acfPostTypeNews.mainImage.localFile) ? acfPostTypeNews.mainImage.localFile : null,
    ...rest,
  }
}


function siteToAlgoliaRecord(data) {
  // TO DO: finish this tranformer function to make one, big, magical object to return with all search results.
  console.log("********************************************")
  console.log("********************************************")
  console.log("********************************************")
  console.log("ALL DATA",data)

  let output = [];
  for(const page in data.pages.edges){
    console.log(page.node)
    console.log(page.node.id)
    output.push ({
      objectID: page.node.id,
      nodeType: 'page'
    })
  }
  for(const post in data.posts){
    output.push ({
      objectID: post.node.id,
      nodeType: 'page'
    })
  }
  console.log("TRANSFORMED DATA",output)

  return output
}

 

const queries = [
  {
    query: fs.readFileSync(
      path.resolve(__dirname, 'algolia-posts.graphql'),
      'utf-8',
    ),    
    transformer: ({ data }) => data.pages.edges.map(postToAlgoliaRecord),
    indexName: 'LibrestreamPosts',
    settings: { attributesToSnippet: [`excerpt:50`] },
  },
  {
    query: fs.readFileSync(
      path.resolve(__dirname, 'algolia-site.graphql'),
      'utf-8',
    ),    
    transformer: ({ data }) => siteToAlgoliaRecord(data),
    indexName: 'LibrestreamSite',
    settings: { attributesToSnippet: ['*:80'] },
  },
]

module.exports = queries