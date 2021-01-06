import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import HeroHome from '../../components/HeroHome'

const templateHome = ({ data }) => {
  
  //const { title,content } = data.wpcontent.page
  const { title,description,linkType,linkText,internal,videoMp4,videoEmbed,videoDescription,slider } = data.wpcontent.page.acfTemplateHome

  return (
    <Layout>
      <HeroHome data={data} />
      <section class="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div
                className="content mb-4"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <a href={internal.uri} className="btn btn-large btn-primary">{linkText}</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

/*
templateDefault.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}
*/

export default templateHome

export const pageQuery = graphql`
  query HomeById($id: ID!) {
    homeHeroBkg: file(name: {eq: "home_hero_bkg"}) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
   
    homeHeroWorker: file(name: { eq: "home_hero_worker" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wpcontent{
      page(id: $id) {
        title
        content    
        acfTemplateHome {
          title
          description
          linkType
          linkText
          internal {
            ... on WPGraphQL_Product {
              id
              title(format: RAW)
              uri
            }
            ... on WPGraphQL_Solution {
              id
              title(format: RAW)
              uri
            }
            ... on WPGraphQL_Post {
              id
              title(format: RAW)
              uri
            }
            ... on WPGraphQL_Page {
              id
              uri
              title(format: RAW)
            }
          }
          videoMp4 {
            sourceUrl(size: LARGE)
          }
          videoEmbed
          videoDescription
          
        }
      }
    }
  }
`
