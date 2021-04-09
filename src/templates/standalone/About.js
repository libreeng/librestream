import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import { useDispatch } from "react-redux"
import Hero from "../../common/ui/Hero"
import Intro from "../../common/ui/Intro"
import FooterCTAs from '../../common/ui/FooterCTAs'
import { openModal } from "../../common/modals/modalActions"

const AboutTemplate = ({ data: { page } }) => {
  const dispatch = useDispatch();
  const acf = page.acfTemplateAbout
  const hero = page.acfHero
  const nav = page.acfSubnav.subnav.map(item => item.subnavItemLink)
  const intro = page.acfIntro
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <Hero hero={hero} nav={nav} />
      <div id="our-story">
        <Intro intro={intro} />
      </div>

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
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 align-items-center justify-content-between">
            {acf.awards && acf.awards.map(award => (
              <div key={award.image.id} className="col mb-4">
                <div className="card">
                  <Image
                    fluid={award.image?.localFile?.childImageSharp?.fluid}
                    alt={award.image.altText && award.image.altText}
                  />
                </div>
              </div>
            )
            )}
          </div>
        </div>
      </section>
      <div className="container">
        <hr className="hr-styled" />
      </div>
      <section id="board-of-directors">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-3">Board of Directors</h2>
            </div>
          </div>
          <div className="row">
            {acf.board && acf.board.map((boardmember, i) => {
              return (
                <div key={`board_${i}`} className="col-12 col-lg-3 mb-4">
                  <button onClick={() => dispatch(openModal("BoardModal", { board: boardmember }))} type="button" className="border-0 bg-transparent p-0">
                    {boardmember.image && (
                      <BackgroundImage
                        Tag="div"
                        className="bg-image aspect-1x1"
                        fluid={boardmember.image?.localFile?.childImageSharp.fluid}
                      />
                    )}
                    <h4 className="mb-0 text-dark text-left">{boardmember.name && boardmember.name}</h4>
                    <p className="text-primary">{boardmember.title && boardmember.title}</p>
                  </button>

                </div>
              )
            })}
          </div>
          <hr className="hr-styled" />
          <div id="management" className="row">
            <div className="col-12">
              <h2 className="mb-3">Management</h2>
            </div>
          </div>
          <div className="row">
            {acf.management && acf.management.map((boardmember, i) => (
              <div key={`board_management_${i}`} className="col-12 col-lg-3 mb-4">
                <button onClick={() => dispatch(openModal("BoardModal", { board: boardmember }))} type="button" className="border-0 bg-transparent p-0">
                  {boardmember.image && (
                    <BackgroundImage
                      Tag="div"
                      className="bg-image aspect-1x1"
                      fluid={boardmember.image?.localFile?.childImageSharp.fluid}
                    />
                  )}
                  <h4 className="mb-0 text-dark text-left">{boardmember.name && boardmember.name}</h4>
                  <p className="text-primary text-left">{boardmember.title && boardmember.title}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTAs featured={cta} />
    </>
  )
}

export const pageQuery = graphql`
  query AboutTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageHero
      ...Subnav
      ...PageIntro
      ...FooterCTAs
      acfTemplateAbout {
        awards {
          image {
            id
            altText
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        theawards {
          image {
            id
            altText
            localFile {
              publicURL
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
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        timelineTitle
        timelineVideo
        management {
          bio
          designations
          image {
            localFile {
              publicURL
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