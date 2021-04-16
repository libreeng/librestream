// TODO: Track down template usage
import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import LearningNav from '../../components/learningMaterials/LearningNav'
import LearningSection from '../../components/learningMaterials/LearningSection'
import FooterCTAs from '../../common/ui/FooterCTAs'
import Layout from "../../containers/Layout"


const LearningMaterialsTemplate = ({ data: { page } }) => {
  const hero = {
    heroHeading: page.title
  }

  const { acfLearningMaterials: { materials } } = page
  // console.log('materials', materials)
  const { cta } = page.acfFooterCTAs

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <LearningNav sections={materials} />
            </div>
            <div className="col-12 col-lg-8">
              {materials && materials.map((instance, i) =>
                <LearningSection instance={instance} key={`learning-section-${i}`} />
              )}
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
  query LearningMaterialsTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...FooterCTAs
      acfLearningMaterials {
        materials {
          materialsTitle
          section {
            sectionTitle
            items {
              ... on WpSupport {
                id
                title
                acfPostLearningMaterial {
                  links {
                    linkImage {
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 500, quality: 100) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                    linkText
                    linkType
                    url
                    page {
                      ... on WpPage {
                        uri
                      }
                    }
                    videoEmbed
                    videoMp4 {
                      mediaItemUrl
                    }
                    pdf {
                      mediaItemUrl
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

export default LearningMaterialsTemplate