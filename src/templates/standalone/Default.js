import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"

const DefaultTemplate = ({ data: { page } }) => {
  const acf = page.acfTemplateDefault
  console.log(acf.columns)
  return (
    <>

      <Hero heroTitle={acf.heroTitle ? acf.heroTitle : page.title} />
      <section>
        <div className="container">
          <div className="row">
            {acf.columns && (
              acf.columns.map(columns =>
                columns.columns.map(column => (
                  <div className={column.columnWidth}>
                    {column.content && parse(column.content)}

                    {column.columnembed && (
                      <div className="responsive-iframe aspect-16x9 mt-5">
                        <iframe src={column.columnembed} title={page.title} alt="pdf" />
                      </div>
                    )}
                  </div>
                ))
              ))}
          </div>
        </div>
      </section>
      {!!page.content && (
        <section itemProp="articleBody">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {parse(page.content)}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export const pageQuery = graphql`
  query DefaultTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
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