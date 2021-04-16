import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import SupportNav from '../../components/support/SupportNav'
import { slugify } from '../../common/utils/helpers'
import SupportKnowledgeBase from "../../components/support/SupportKnowledgebase"
import Layout from "../../containers/Layout"



const SupportTemplate = ({ data: { page } }) => {
  const { acfSupportSections: { supportSections: sections } } = page
  const hero = {
    heroHeading: page.title
  }
  const { cta } = page.acfFooterCTAs

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <SupportNav sections={sections} />
              <div className="border-bracket mt-5 mb-3 text-center">
                <h6>Onsight Service Status</h6>
              </div>
              {page.acfSupportSections.serviceStatusLink && (
                <a href={page.acfSupportSections.serviceStatusLink.url} target={page.acfSupportSections.serviceStatusLink.target} className="btn btn-primary btn-block">{page.acfSupportSections.serviceStatusLink.title ? page.acfSupportSections.serviceStatusLink.title : 'View Onsight Service'}</a>
              )}

            </div>
            <div className="col-12 col-lg-8">
              {sections && sections.map(section => {
                const { supportSectionTitle, sectionKnowledgebases } = section
                const slug = slugify(supportSectionTitle)

                return (
                  <div key={slug} className="row my-3">
                    <div className="col-12">
                      <h3>{supportSectionTitle}</h3>
                      <div className="list-group">
                        {sectionKnowledgebases && sectionKnowledgebases.map(knowledgebase => {
                          const { kbTitle, knowledgebasePost } = knowledgebase
                          return <SupportKnowledgeBase key={knowledgebasePost.id} post={knowledgebasePost} title={kbTitle} />
                        })}
                      </div>
                      <hr className="hr-styled" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {!!page.content && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {parse(page.content)}
              </div>
            </div>
          </div>
        </section>
      )}

      <FooterCTAs featured={cta} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query SupportTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...PageHero
      ...FooterCTAs
      acfSupportSections {
        serviceStatusLink {
          target
          url
          title
        }
        supportSections {
          supportSectionTitle
          sectionKnowledgebases {
            kbTitle
            knowledgebasePost {
              ... on WpSupport {
                id
                title
                acfKnowledgebase {
                  kbImage {
                    altText
                    localFile {
                      publicURL
                      childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  section {
                    sectionTitle
                    sectionType
                    links {
                      videoEmbed
                      videoMp4 {
                        mediaItemUrl
                      }
                      url
                      linkType
                      linkText
                      pdf {
                        localFile {
                          publicURL
                        }
                      }
                      content
                    }
                    faqs {
                      answer
                      question
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default SupportTemplate