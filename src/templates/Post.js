import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from '../common/ui/hero/HeroDefault'
import RelatedPosts from "../components/RelatedPosts"
import NewsletterSignup from "../components/NewsletterSignup"
import SocialShare from "../components/SocialShare"

const PostTemplate = ({ data: { previous, next, post } }) => {
  console.log("next", next)
  console.log("previous", previous)
  const featuredImage = {
    fluid: post.acfPostTypeNews?.mainImage?.localFile?.childImageSharp?.fluid,
    alt: post.acfPostTypeNews?.mainImage?.altText || ``
  }

  // Currently related posts are not dynamically checking against postCategory
  const postCategory = {
    categoryName: post.categories.nodes[0].name,
    categorySlug: post.categories.nodes[0].slug
  }

  console.log(post)

  return (
    <>
      <Hero title={postCategory.categoryName} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <header>
                <h1>{parse(post.title)}</h1>
                <hr />
                <p className="text-light">{post.date}</p>
              </header>
              {featuredImage?.fluid && (
                <Image
                  fluid={featuredImage.fluid}
                  alt={featuredImage.alt}
                  style={{ marginBottom: 50 }}
                />
              )}
              {!!post.content && (
                <div itemProp="articleBody">{parse(post.content)}</div>
              )}
            </div>
            <div className="col-lg-3 ml-lg-auto">
              <a href="#" className="d-flex align-items-center">Next <i className="icon-play ml-2"></i></a>
              <hr />
              <h6>Related Posts</h6>
              <RelatedPosts />
              <div className="border-bracket">
                <p>Want more news? Sign up here for the latest industry news and events.</p>
              </div>
              <NewsletterSignup />
              <SocialShare />
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled" />

    </>
  )
}

export const postQuery = graphql`
  query PostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      ...PostDetails
    }
    # previous and next be able to be migrated to PostFields fragment not sure?
    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`

export default PostTemplate
