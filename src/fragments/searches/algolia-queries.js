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
      page.node.acfHero.heroDescription,      
      page.node.acfIntro.heroDescription,
      page.node.acfTemplateDefault, 
    ],
    seo: [
      page.node.seo.metaDesc,
      page.node.seo.metaKeywords
    ],    
    content: [
      page.node.content,
      page.node.acfIntro.introDescription,
      page.node.acfLearningMaterials,
      page.node.acfPlatformFeatures ,
      page.node.acfSupportSections, 
      page.node.acfTemplateAbout, 
      page.node.acfTemplateCampaignWebinar, 
      page.node.acfTemplateCampaignWhitePaper, 
      page.node.acfTemplateCareers, 
      page.node.acfTemplateContact, 
      page.node.acfTemplateContactSupport, 
      page.node.acfTemplateCustomerSuccess, 
      page.node.acfTemplateHome, 
      page.node.acfTemplateItSecurity,
      page.node.acfTemplateMediaKit,
      page.node.acfTemplateMobileInnovatorAward,
      page.node.acfTemplatePartners,
      page.node.acfTemplatePlatform,
      page.node.acfTemplatePlaformFeature,
      page.node.acfTemplateServices,
      page.node.acfTemplateRemoteExpertAcceleratorProgram,
      page.node.acfTemplateProductsARSP,
      page.node.acfTemplateProducts,
      page.node.acfTemplateProductRecycling,
      page.node.acfTemplatePlatformFeatureSpecialized      
    ],
  }));

  var posts = data.posts.edges.map(page => ({     
    objectID: page.node.id,
    link: page.node.link,
    nodeType: page.node.nodeType,
    nodeSubType:  page.node.categories,
    title: page.node.title,
    excerpt: page.node.excerpt,
    content: page.node.content,
    seo: [
      page.node.seo.metaDesc,
      page.node.seo.metaKeywords,
      page.node.tags
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





const ALGOLIA_DELIMITER = ". "

/**
 * Goes through every item in the array of objects. if the object contains an array, then run "algoliaFlatten" on it to combine it into a single string.
 */
function algoliaPrepare(obj){
    for (key of Object.keys(obj)) { // looping through each entry being submitted to Algolia
      obj[key] = algoliaFlatten(obj[key]) // make sure a string is returned, not an array or object.
    }
    return obj  
}



/** This ensures if the item is an object or array, it will be returned as a string */
function algoliaFlatten(item){
  const isArray = Object.prototype.toString.call(item) === '[object Array]';
  const isString = Object.prototype.toString.call(item) === '[object String]';
  if(isArray && item !== null) {
    return algoliaFlattenArray(item)    
  } else if(isString && item !== null){
    if (item === null || item == 'null' || item == 'undefined') return;
    return item
  } else if(typeof item === 'object' && item !== null){ // must be an object (is there a better way to test for this?)
    return algoliaFlattenObject(item)    
  }	

  return null

}

function algoliaFlattenArray(arr){
  const arrFiltered = arr.filter(el => {    
    const isString = Object.prototype.toString.call(el) === '[object String]';
    if (isString && (el == null || el == 'null' || el == 'undefined' || el.trim() == '')) return false
    return el != null;
  });

  if(arrFiltered && Array.isArray(arrFiltered) && arrFiltered.length == 0) {
    return ''
  }

  return arrFiltered.map((item) => {
    return algoliaFlatten(item)
  }).join(ALGOLIA_DELIMITER)
}

function algoliaFlattenObject(obj){
  let outputArray = []
  for (var key of Object.keys(obj)) {
    outputArray.push(algoliaFlatten(obj[key]))
  }
  return outputArray.join(ALGOLIA_DELIMITER)
}






/**
 * Goes through every item in the array of object. if the object contains an array, then run "algoliaJoinArray" on it to combine it into a single string.
 */
/*
 function algoliaPrepare(obj){
  for (key of Object.keys(obj)) {
    if(Array.isArray(obj[key])){
      obj[key] = algoliaJoinArray(obj[key])
    }
  }
  return obj  
}
 */

// Filters out blank elements from the array, and joins them with a special character.
function algoliaJoinArray(array){  
  const arrFiltered = array.filter(el => {
    return el != null && el != 'null' && el != 'undefined' && el.trim() != '';
  });
  return arrFiltered.join(ALGOLIA_DELIMITER);
}


