const fs = require('fs')
const path = require('path')
const parse = require('html-react-parser');
const { isArray } = require('util');


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
  

  var solutions = data.IndustrySolutions.edges.map(page => ({ 
    objectID: page.node.id,
    link: page.node.uri,
    nodeType: page.node.nodeType,
    title: page.node.title,
    excerpt: '',
    hero: [
      page.node.acfHero.heroHeading,
      page.node.acfHero.heroDescription
    ],
    content: [
      page.node.acfPostTypeSolution.solutionTitle,
      page.node.content
    ],
  }));

  var pages = data.pages.edges.map(page => ({     
    objectID: page.node.id,
    link: page.node.link,
    nodeType: page.node.nodeType,
    title: page.node.title,
    //excerpt: page.node.acfHero.heroHeading + ' | ' + page.node.acfHero.heroDescription,
    hero: [
      page.node.acfHero.heroHeading,
      page.node.acfHero.heroDescription
    ],
    seo: [
      page.node.seo.metaDesc,
      page.node.seo.metaKeywords
    ],    
    content: [
      page.node.content,
      page.node.acfIntro.introDescription,
      page.node.acfIntro.heroDescription
    ],
    
    // add template specific stuff  if page.node.template.templateName == ???
  }));

  var posts = data.posts.edges.map(page => ({     
    objectID: page.node.id,
    link: page.node.link,
    nodeType: page.node.nodeType,
    title: page.node.title,
    excerpt: page.node.excerpt,
    content: page.node.content,
    seo: [
      page.node.seo.metaDesc,
      page.node.seo.metaKeywords
    ],
    // + ", " +  page.node.tags.nodes.join(", "),
  }));

  var casestudies = data.CaseStudies.edges.map(page => ({     
    objectID: page.node.id,
    link: page.node.link,
    nodeType: page.node.nodeType,
    title: page.node.title,
    hero: [
      page.node.acfHero.heroHeading,
      page.node.acfHero.heroDescription
    ],
    content: [
      page.node.content,
      page.node.acfPostTypeUseCase.articleTitle,
      page.node.acfPostTypeUseCase.articleContent,
      page.node.acfPostTypeUseCase.summaryDescription,
      page.node.acfPostTypeUseCase.situation,
      page.node.acfPostTypeUseCase.solution,
      page.node.acfPostTypeUseCase.results,
    ],
  }));

  const output = [
    ...pages,
    ...posts,
    ...solutions,
    ...casestudies,
  ];

  //console.log("TRANSFORMED DATA")
  //console.log(output)

  return output.map(function(obj){
    return algoliaPrepare(obj)
  });
}

 

const queries = [
  /*
  {
    query: fs.readFileSync(
      path.resolve(__dirname, 'algolia-posts.graphql'),
      'utf-8',
    ),    
    transformer: ({ data }) => data.pages.edges.map(postToAlgoliaRecord),
    indexName: 'LibrestreamPosts',
    settings: { attributesToSnippet: [`excerpt:50`] },
  },
  */
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



/**
 * Goes through every item in the array of object. if the object contains an array, then run "algoliaJoinArray" on it to combine it into a single string.
 */
function algoliaPrepare(obj){
    for (key of Object.keys(obj)) {
      if(Array.isArray(obj[key])){
        obj[key] = algoliaJoinArray(obj[key])
      }
    }
    return obj  
}

// Filters out blank elements from the array, and joins them with a special character.
function algoliaJoinArray(array){  
  const arrFiltered = array.filter(el => {
    return el != null && el != 'null' && el != 'undefined' && el.trim() != '';
  });
  return arrFiltered.join(" ~ ");
}


