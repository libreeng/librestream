import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import {embedUrl} from "../../common/utils/helpers"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'

const DefaultTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateDefault
  const hero = {
    heroHeading: acf.heroTitle ? acf.heroTitle : page.title,
    heroDescription: acf.heroDescription ? acf.heroDescription : false,
    backgroundImage: acf.heroBackground ? acf.heroBackground : false
  }
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <Hero hero={hero} />
      {acf.columns && (
        <section>
          <div className="container">
            <div className="row">
              {acf.columns.map(columns =>
                columns.columns.map((column, i) => (
                  <div className={column.columnWidth} key={`link_${i}`}>
                    <div className={column.columnWidth !== 'col_full' ? 'sticky-top' : ''}>
                      {column.content && parse(column.content)}
                      {column.columnembed && (

                        <div className="responsive-iframe aspect-16x9 mt-5">
                          <iframe src={embedUrl(column.columnembed)} title={page.title} alt="pdf" />
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}

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
    </>
  )
}

export const pageQuery = graphql`
  query DefaultTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...FooterCTAs
      acfTemplateDefault {
        columns {
          ... on WpPage_Acftemplatedefault_Columns_Columns {
            columns {
              columnWidth
              content
              columnembed
            }
          }
        }
        heroBackground {
          localFile {
            publicURL
          }
        }
        heroDescription
        heroTitle
      }
    }
  }
`

export default DefaultTemplate