import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { CardColumns } from 'react-bootstrap'

const Page = ({ data }) => {
  const { title,content } = data.wpcontent.page
  const { heroTitle, heroDescription, heroBackground, columns  } = data.wpcontent.page.acfTemplateDefault
  console.log("COLUMNS",columns)
  return (
    <Layout>
      { heroBackground && 
        <div className="jumbotron" style={{backgroundImage: `url(${heroBackground.sourceUrl})`,backgroundSize: `cover`,backgroundPosition:'center center'}}>
          <div className="container py-5">
              <h1>{heroTitle}</h1>
              <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: heroDescription }}
                />
          </div>
        </div>
      }

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </section>


      {columns.map((flexContent,id) => (
        <div key={id}>
       
        
        { flexContent.fieldGroupName == 'page_Acftemplatedefault_Columns_Columns' &&
          <div className='container'> 
          <div className='row'>
          { flexContent.columns.map((col,id) => (
            <div
              className={ col.columnWidth }
              dangerouslySetInnerHTML={{ __html: col.content }}
              key={id}
            />
          ))}
          </div>
          </div>
        }
      </div>
      ))}

    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
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

