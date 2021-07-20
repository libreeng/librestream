/* eslint-disable consistent-return */
const path = require(`path`)
const staticRedirects = require("./redirects.json")

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

function sanitizeRedirect(path) {
  // strip absolute url
  // strip .html extensions
  // replace regex pattern

  const sanitized = path
    .replace("http://www.librestreamcms.kinsta.cloud", "")
    .replace("https://www.librestreamcms.kinsta.cloud", "")
    .replace("librestream.com", "")

  return sanitized.startsWith('/') ? sanitized : `/${sanitized}`
}


const createStandalonePages = async ({ pages, gatsbyUtilities }) =>
  Promise.all(
    pages.map(page => {
      if (!page) return

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      return gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: page.uri,

        // use the page template as the page component
        component: path.resolve(`./src/templates/standalone/${page.template.templateName.replace(/\s+/g, '')}.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: page.id,

        },
      })


    })
  )


const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: post.uri,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/${post.nodeType}.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,

          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  )

const createCategoryPages = async ({ categories, gatsbyUtilities }) =>
  Promise.all(
    categories.map(category => {
      if (!category) return
      // const template = category.slug.replace(/-./g, x => x[1].toUpperCase()[1]).replace(/^\w/, s => s.toUpperCase())
      const cleanPath = category.uri.replace('/category/', '/')

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      return gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: cleanPath,

        // use the page template as the page component
        component: path.resolve(`./src/templates/standalone/Category.js`),
        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: category.id,

        },
      })


    })
  )

const createSiteRedirects = async ({ redirects, gatsbyUtilities }) => {
  console.log(`Creating: ${staticRedirects.length} Redirects`)
  const { createRedirect } = gatsbyUtilities.actions
  Promise.all(
    staticRedirects.map(redirect => {
      const { fromPath, toPath } = redirect
      // console.log(`Creating: ${redirects.length} redirects`)
      // const { origin, target, type, format } = redirect
      // const fromPath = sanitizeRedirect(origin)
      // const toPath = sanitizeRedirect(target)
      // const isPermanent = type === 301
      createRedirect({
        fromPath,
        toPath,
        isPermanent: false,
        force: false,
        // ignoreCase: true
      })

    })
  )
}

async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            uri
            nodeType
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
      allWpCaseStudy(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            uri
            nodeType
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
      allWpResource(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            uri
            nodeType
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
      allWpSolution(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            uri
            nodeType
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
      allWpFormConfirmation(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            uri
            nodeType
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
      allWpReleaseNote(sort: { fields: [date], order: DESC }) {
        edges {
          post: node {
            id
            uri
            nodeType
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  const news = graphqlResult.data.allWpPost.edges
  const casestudies = graphqlResult.data.allWpCaseStudy.edges
  const resources = graphqlResult.data.allWpResource.edges
  const formConfirmations = graphqlResult.data.allWpFormConfirmation.edges
  const solutions = graphqlResult.data.allWpSolution.edges
  const releaseNotes = graphqlResult.data.allWpReleaseNote.edges

  const posts = [
    ...news,
    ...casestudies,
    ...resources,
    ...formConfirmations,
    ...solutions,
    ...releaseNotes,
  ]

  return posts
}

async function getPages({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPages {
      # Query all WordPress blog posts sorted by date
      allWpPage(sort: { fields: [date], order: DESC }) {
        nodes {
          id
          uri
          template {
            templateName
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }
  const pages = graphqlResult.data.allWpPage.nodes

  return pages
}

async function getCategories({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpCategories {
      # Query all WordPress blog posts sorted by date
      allWpCategory {
        nodes {
          id
          uri
          slug
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }
  const categories = graphqlResult.data.allWpCategory.nodes

  return categories
}

async function getRedirects({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPages {
      # Query all WordPress redirects
      wp(id: {eq: "/graphql--rootfields"}) {
        seo {
          redirects {
            origin
            target
            type
            format
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your site redirects`,
      graphqlResult.errors
    )
    return
  }
  const redirects = graphqlResult.data.wp.seo.redirects

  return redirects
}

exports.createPages = async gatsbyUtilities => {
  // Query the GraphQL server
  const posts = await getPosts(gatsbyUtilities)
  const pages = await getPages(gatsbyUtilities)
  const categories = await getCategories(gatsbyUtilities)
  //const redirects = await getRedirects(gatsbyUtilities)

  await createIndividualBlogPostPages({ posts, gatsbyUtilities })
  await createStandalonePages({ pages, gatsbyUtilities })
  await createCategoryPages({ categories, gatsbyUtilities })
  //await createSiteRedirects({ redirects, gatsbyUtilities })

}

