import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Hero from '../common/ui/Hero'
import NextPrevMenu from '../common/ui/menus/NextPrevMenu'
import parse from "html-react-parser"

const CaseStudy = ({ data: { previous, next, post } }) => {
  console.log("Case Study:", post)

  const heroData = {
    title: post.acfPostTypeUseCase?.heroTitle,
    subtitle: post.acfPostTypeUseCase?.heroSubtitle,
    background: post.acfPostTypeUseCase?.localFile?.childImageSharp?.fluid,
    featuredImage: post.acfPostTypeUseCase.whiteLogo.localFile?.childImageSharp?.fluid
  }

  const columns = post.acfPostTypeUseCase.columns

  return (
    <>
      <Hero
        heroTitle={heroData.title}
        heroSubtitle={heroData.subtitle}
        subnav="false"
        logo="true"
        heroBackgroundImage={heroData.background}
        featuredImage={heroData.featuredImage}
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
            {/* <div className="col-lg-4">
              <div className="bg-orange p-2">
                <h6 className="mb-0 text-white">Situation</h6>
              </div>
              <div className="border-left border-dark p-3">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias libero unde natus, reprehenderit harum ipsam commodi nesciunt! Distinctio, quos! Consectetur delectus neque reprehenderit error eligendi numquam eius, ab veniam tempore.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-orange p-2">
                <h6 className="mb-0 text-white">Solution</h6>
              </div>
              <div className="border-left border-dark p-3">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias libero unde natus, reprehenderit harum ipsam commodi nesciunt! Distinctio, quos! Consectetur delectus neque reprehenderit error eligendi numquam eius, ab veniam tempore.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-orange p-2">
                <h6 className="mb-0 text-white">Results</h6>
              </div>
              <div className="border-left border-dark p-3">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias libero unde natus, reprehenderit harum ipsam commodi nesciunt! Distinctio, quos! Consectetur delectus neque reprehenderit error eligendi numquam eius, ab veniam tempore.</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="bg-primary text-white bg-offset-right mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="lead">“30,000 inspections have now been conducted by SGS QiiQ, the remote inspections tool which was fully deployed during the year. This digital tool has established a new standard in the industry.”</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore magnam, voluptatem ullam facilis ratione recusandae illo voluptatibus cumque nisi corporis aspernatur officiis. Praesentium culpa minus enim corrupti sapiente quam.</p>
              <a href="#blah" className="btn btn-border border-white text-white">Full Article?</a>
              {/* It looks like on the current site this is a link to a blog post */}
            </div>
            <div className="col-lg-5">
              <img src="https://via.placeholder.com/768" className="img-fluid img-offset-top" alt="" />
            </div>
          </div>
        </div>
      </section>
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
    previous: wpCaseStudy(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpCaseStudy(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`

export default CaseStudy
