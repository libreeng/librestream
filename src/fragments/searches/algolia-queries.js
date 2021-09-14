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
    modified: page.node.modified,
    link: page.node.link,
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
    seo: [
      page.node.seo.metaDesc,
      page.node.seo.metaKeywords
    ],   
  }));

  
  var pages = data.pages.edges.map(page => ({     
    objectID: page.node.id,
    modified: page.node.modified,
    link: page.node.link,
    nodeType: page.node.nodeType,
    title: page.node.title,
    //excerpt: page.node.acfHero.heroHeading + ' | ' + page.node.acfHero.heroDescription,
    hero: [
      page.node.acfHero.heroHeading,    
      page.node.acfIntro.heroDescription ? page.node.acfIntro.heroDescription : page.node.acfHero.heroDescription,
    ],  
    content: [      
      page.node.acfIntro.introDescription,
      page.node.content,
      page.node.acfLearningMaterials,
      page.node.acfPlatformFeatures,
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
    seo: [
      page.node.seo.metaDesc,
      page.node.seo.metaKeywords
    ],  
  }));

  var posts = data.posts.edges.map(page => ({     
    objectID: page.node.id,
    modified: page.node.modified,
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
  }));

  var casestudies = data.CaseStudies.edges.map(page => ({     
    objectID: page.node.id,
    modified: page.node.modified,
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
    seo: [
      page.node.seo.metaDesc,
      page.node.seo.metaKeywords
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
  // Uncomment this if we want to switch to using Algolia for our Post searches. This will submit all posts to the "LibrestreamPosts" index.
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
  } else if(isString){
    if (item === null || item == 'null' || item == 'undefined' || item.trim() == '') return;
    return item
  } else if(typeof item === 'object' && item !== null){ // must be an object (is there a better way to test for this?)
    return algoliaFlattenObject(item)    
  }	

  return null

}

function algoliaFlattenArray(arr){

  const arrFiltered = removeEmptyAndRepeats(arr)

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

  const arrFiltered = removeEmptyAndRepeats(outputArray)

  if(arrFiltered && Array.isArray(arrFiltered) && arrFiltered.length == 0) {
    return ''
  }

  return arrFiltered.join(ALGOLIA_DELIMITER)
}


// this function was created in an effort to remove empty strings that got a dilimited placed after them, resulting in strings of ". . . . ";
function removeEmptyAndRepeats(arr){
  
  // removes duplicates from the array
  let arrUnique = arr.filter((c, index) => {
    return arr.indexOf(c) === index;
  });

  // filters out empty items from the array
  let arrFiltered = arrUnique.filter(el => {    
    const isString = Object.prototype.toString.call(el) === '[object String]';
    if (isString && (el == null || el == 'null' || el == 'undefined' || el.trim() == '')) return false
    return el != null;
  });
     
  // removes repeating characters, i.e. ". . . . "
  // replaces repeated occurances of the ALGOLIA_DELIMITER (period and space) (note: the "(\. )" is the pattern to match. The period is escaped with a backslash)
  arrFiltered = arrFiltered.map((str) => {
    const isString = Object.prototype.toString.call(str) === '[object String]';
    if (isString) return str.replace(/(\. )\1{1,}/g, '$1');
    return str;  
  });

  return arrFiltered
}


