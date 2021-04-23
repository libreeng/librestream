import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { useDispatch } from "react-redux"
import Hero from "../../common/ui/Hero"
import Intro from "../../common/ui/Intro"
import FooterCTAs from '../../common/ui/FooterCTAs'
import { openModal } from "../../common/modals/modalActions"
import SEO from "../../containers/SEO"
import Layout from "../../containers/Layout"


const AboutTemplate = ({ data: { page } }) => {
  let dispatch = () => { }
  if (typeof window !== 'undefined') {
    dispatch = useDispatch()
  }

  const acf = page.acfTemplateAbout
  const hero = page.acfHero
  const nav = page.acfSubnav.subnav.map(item => item.subnavItemLink)
  const intro = page.acfIntro
  const { cta } = page.acfFooterCTAs

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
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
            {acf.awards && acf.awards.map(award => {
              const awardImageData = award.image?.localFile?.childImageSharp?.gatsbyImageData
              const awardImageAlt = award.image.altText && award.image.altText || ``
              return (
                <div key={award.image.id} className="col mb-4">
                  <div className="card">
                    {awardImageData && (
                      <GatsbyImage
                        image={awardImageData}
                        alt={awardImageAlt} />
                    )}
                  </div>
                </div>
              )
            })}
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
              const bgImageData = boardmember.image?.localFile?.childImageSharp?.gatsbyImageData
              return (
                <div key={`board_${i}`} className="col-12 col-lg-3 mb-4">
                  <button
                    onClick={() => dispatch(openModal("BoardModal", { board: boardmember }))}
                    type="button" className="border-0 bg-transparent p-0">
                    {bgImageData && (
                      <BgImage
                        className="bg-image aspect-1x1"
                        image={bgImageData}
                      />
                    )}
                    <h4 className="mb-0 text-dark text-left">{boardmember.name && boardmember.name}</h4>
                    <p className="text-primary">{boardmember.title && boardmember.title}</p>
                  </button>

                </div>
              );
            })}
          </div>
          <hr className="hr-styled" />
          <div id="management" className="row">
            <div className="col-12">
              <h2 className="mb-3">Management</h2>
            </div>
          </div>
          <div className="row">
            {acf.management && acf.management.map((boardmember, i) => {
              const bgImageData = boardmember.image?.localFile?.childImageSharp?.gatsbyImageData
              return (
                <div key={`board_management_${i}`} className="col-12 col-lg-3 mb-4">
                  <button
                    onClick={() => dispatch(openModal("BoardModal", { board: boardmember }))}
                    type="button" className="border-0 bg-transparent p-0">
                    {bgImageData && (
                      <BgImage
                        className="bg-image aspect-1x1"
                        image={bgImageData}
                      />
                    )}
                    <h4 className="mb-0 text-dark text-left">{boardmember.name && boardmember.name}</h4>
                    <p className="text-primary text-left">{boardmember.title && boardmember.title}</p>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FooterCTAs featured={cta} />
    </Layout>
  );
}

export const pageQuery = graphql`query AboutTemplateQuery($id: String!) {
  page: wpPage(id: {eq: $id}) {
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
              gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
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
              gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
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
              gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
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
              gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
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