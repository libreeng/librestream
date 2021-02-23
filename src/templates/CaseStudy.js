import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Hero from '../common/ui/Hero'
import NextPrevMenu from '../common/ui/menus/NextPrevMenu'
import parse from "html-react-parser"
import BackgroundImage from 'gatsby-background-image'

const CaseStudy = ({ data: { previous, next, post } }) => {
  console.log("Case Study:", post)
  console.log("next", next)
  console.log("previous", previous)
  const acf = post.acfPostTypeUseCase


  const article = {
    title: acf.articleTitle,
    content: acf.articleContent,
    link: acf.articleLink,
    linkText: acf.articleLinkText,
    image: acf.articleImage?.localFile.childImageSharp.fluid
  }

  const heroData = {
    heroTitle: acf?.heroTitle,
    heroSubtitle: acf?.heroSubtitle,
    herobackgroundImage: acf?.localFile?.childImageSharp?.fluid,
    heroFeaturedImage: acf.whiteLogo.localFile?.childImageSharp?.fluid
  }

  const columns = acf.columns

  return (
    <>
      <Hero
        heroTitle={heroData.heroTitle}
        heroSubtitle={heroData.heroSubtitle}
        subnav="false"
        logo="true"
        heroBackgroundImage={heroData.heroBackgroundImage}
        heroFeaturedImage={heroData.heroFeaturedImage}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Customer Use Case</h2>
              <h2 className="lead text-primary">{ post.title }</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
      <section>
        <div className="container">
          <div className="row">
            {columns && columns.map(column => 
              <div className="col-lg-4">
                <div className="bg-orange p-2">
                  <h6 className="mb-0 text-white">{column.columnTitle}</h6>
                </div>
                <div className="border-left border-dark p-3">
                  {parse(column.columnContent)}
                </div>
              </div>  
            )}
          </div>
        </div>
      </section>
      {article.title && (
        <section className="bg-primary text-white bg-offset-right mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p className="lead">{article.title && article.title}</p>
                {article.content && parse(article.content)}
                {article.link && (
                  <a href={article.link} className="btn btn-border border-white text-white">{article.linkText ? article.linkText : 'Full Article'}</a>
                )}
              </div>
              {article.image && (
                <div className="col-lg-5">
                  <BackgroundImage
                    Tag="div"
                    className="bg-image aspect-1x1 img-offset-top"
                    fluid={article.image}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      
      <NextPrevMenu previous={previous} next={next} />

    </>
  )
}

CaseStudy.propTypes = {

}

export const pageQuery = graphql`
  query CaseStudyById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpCaseStudy(id: { eq: $id }) {
      id
      title
      uri
      slug
      acfPostTypeUseCase {
        articleContent
        articleLink
        articleLinkText
        articleTitle
        articleImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        heroBackground {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          title
          altText
        }
        productIntro
        productTitle1
        productTitle2
        columns {
          columnContent
          columnTitle
          demoFormIframe
          showRequestDemoButton
        }
        heroTitle
        heroSubtitle
        whiteLogo {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      content
    }

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

export default CaseStudy
