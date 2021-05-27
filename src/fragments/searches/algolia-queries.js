const fs = require('fs')
const path = require('path')

function postToAlgoliaRecord({ node: { id, acfPostTypeNews, tags, seo, ...rest } }) {
  return {
    objectID: id,
    image: (acfPostTypeNews?.mainImage?.localFile) ? acfPostTypeNews.mainImage.localFile : null,
    tags: tags.nodes,
    ...seo,
    ...rest,
  }
}
function pageToAlgoliaRecord({ node: { id, acfHero, acfIntro, template, seo, ...rest } }) {
  return {
    objectID: id,
    ...acfHero,
    ...acfIntro,
    ...template,
    ...seo,
    ...rest,
  }
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
      path.resolve(__dirname, 'algolia-pages.graphql'),
      'utf-8',
    ),    
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName: 'LibrestreamPages',
    settings: { attributesToSnippet: ['*:80'] },
  },
]

module.exports = queries