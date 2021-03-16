import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const AboutTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateAbout
  const hero = {
    heroHeading: acf.heroTitle
  }
  const nav = acf.subnav.map(item => item.subnavItemLink)

  return (
    <>
      <Hero hero={hero} nav={nav} />
      <section id="our-story">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1>{acf.storyTitle && acf.storyTitle}</h1>
              {acf.storyDescription && parse(acf.storyDescription)}
            </div>
            <div className="col-lg-4">
              {acf.storyImage && (
                <Image
                  fluid={acf?.storyImage?.localFile?.childImageSharp?.fluid}
                  alt={acf?.storyImage.altText}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section id="awards">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Awards</h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 align-items-center justify-content-between">
            {acf.awards && acf.awards.map(award => {
              return (
                <div key={award.image.id} className="col-12 col-lg-2 mb-4">
                  <Image
                    fluid={award.image.localFile.childImageSharp.fluid && award.image.localFile.childImageSharp.fluid}
                    alt={award.image.altText && award.image.altText}
                  />
                </div>
              )
            }
            )}
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section id="timeline">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {acf.timelineTitle && (
                <h2>{acf.timelineTitle}</h2>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="responsive-iframe aspect-16x9">
        <div className="bg-fill bg-dark">
          <h1 className="text-white">Timeline video</h1>
        </div>
        {acf.timelineVideo && (
          <iframe src={acf.timelineVideo} frameborder="0" title="Timeline Video" />
        )}
      </div>
      <section id="board-of-directors">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Board of Directors</h2>
            </div>
          </div>
          <div className="row">
            {acf.board && acf.board.map((boardmember, i) => {
              return (
                <div key={`board_${i}`} className="col-12 col-lg-3 mb-4">
                  {boardmember.image && (
                    <BackgroundImage
                      Tag="div"
                      className="bg-image aspect-1x1"
                      fluid={boardmember.image.localFile.childImageSharp.fluid}
                    />
                  )}
                  <h4 className="mb-0">{boardmember.name && boardmember.name}</h4>
                  <p className="text-primary">{boardmember.title && boardmember.title}</p>
                </div>
              )
            })}
          </div>
          <hr className="hr-styled" />
          <div id="management" className="row">
            <div className="col-12">
              <h2>Management</h2>
            </div>
          </div>
          <div className="row">
            {acf.board && acf.board.map((boardmember, i) =>
              <div key={`board_${i}`} className="col-12 col-lg-3 mb-4">
                {boardmember.image && (
                  <BackgroundImage
                    Tag="div"
                    className="bg-image aspect-1x1"
                    fluid={boardmember.image.localFile.childImageSharp.fluid}
                  />
                )}
                <h4 className="mb-0">{boardmember.name && boardmember.name}</h4>
                <p className="text-primary">{boardmember.title && boardmember.title}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <hr className="hr-styled" />
    </>
  )
}

export const pageQuery = graphql`
  query AboutTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      acfTemplateAbout {
        heroTitle
        subnav {
          subnavItemLink {
            target
            title
            url
          }
        }
        awards {
          image {
            id
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        board {
          name
          title
          bio
          designations
          image {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        storyDescription
        storyImage {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        storyTitle
        timelineTitle
        timelineVideo

        management {
          bio
          designations
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            altText
          }
          name
          title
        }
      }
    }
  }
`

export default AboutTemplate