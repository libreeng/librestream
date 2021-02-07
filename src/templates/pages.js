import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HeroDefault from '../components/HeroDefault'

const Page = ({ data }) => {
  const { title, content } = data.wpcontent.page
  const { heroTitle, heroDescription, heroBackground, columns } = data.wpcontent.page.acfTemplateDefault
  console.log("COLUMNS", columns)
  return (
    <>
      { heroBackground ? (
        <div className="jumbotron" style={{ backgroundImage: `url(${heroBackground.sourceUrl})`, backgroundSize: `cover`, backgroundPosition: 'center center' }}>
          <div className="container py-5">
            <h1>{heroTitle}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: heroDescription }} />
          </div>
        </div>
      ) : (
          <HeroDefault title={title} />
        )}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </section>


      {columns.map((flexContent, id) => (
        <div key={id}>


          { flexContent.fieldGroupName === 'page_Acftemplatedefault_Columns_Columns' && (
            <div className='container'>
              <div className='row'>
                {flexContent.columns.map((col, id) => (
                  <div
                    className={col.columnWidth}
                    dangerouslySetInnerHTML={{ __html: col.content }}
                    key={id}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

    </>
  )
}

Page.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: ID!) {
    wpcontent{
      page(id: $id) {
        title
        content
        acfTemplateDefault {
          heroTitle
          heroDescription
          heroBackground {
            sourceUrl(size: LARGE)
            altText
          }
          columns {
            ... on WPGraphQL_Page_Acftemplatedefault_Columns_Columns {
              fieldGroupName
              columns {
                content
                columnWidth
              }
            }
          }
        }
      }
    }
  }
`

