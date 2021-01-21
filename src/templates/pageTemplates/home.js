import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import HeroHome from '../../components/HeroHome'
import CardWithLogo from '../../components/CardWithLogo'
import Card from '../../components/Card'

const templateHome = ({ data }) => {
  
  //const { title,content } = data.wpcontent.page
  const { 
    title,
    description,
    linkType,
    linkText,
    internal,
    videoMp4,
    videoEmbed,
    videoDescription,
    slider,
    homeStat,
    useCases,
    news } = data.wpcontent.page.acfTemplateHome
    console.log(useCases)
  return (
    <Layout>
      <HeroHome data={data} />
      <section className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2>
                  {title}
                </h2>
                <div
                  className="lead mb-4"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <a href={internal.uri} className="btn btn-large btn-primary">{linkText}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="scrolling-wrapper">
          <div className="row flex-nowrap row-cols-1 row-cols-md-2 row-cols-lg-4">
            {useCases && useCases.map(useCase => (
              <div className="col mb-4">
                <CardWithLogo></CardWithLogo>
                {/* // <div className="col-12 col-md-6 col-lg-3" key={useCase.useCase.id}>
                //   <div>{useCase.useCase.title}</div>
                // </div> */}
              </div>  
            ))}         
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <div className="row">
            {homeStat && homeStat.map((homeStat, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="display-1">{homeStat.homeStatValue}</div>
                <p className="text-uppercase lead border-left border-dark">{homeStat.homeStatLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr class="border-dark"/>
      <section class="bg-white">
        <div className="container">
          <div className="row">
            {news && news.map((newsItem) => (
              <div className="col-12 col-md-6 col-lg-3" key={newsItem.newsItem.id}>
                <Card></Card>
                <h3 className="mt-3">{newsItem.newsItem.title}</h3>
              </div>
            ))}
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
          homeStat {
            homeStatLabel
            homeStatValue
          }
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
          useCases {
            useCase {
              ... on WPGraphQL_CaseStudy {
                id
                title(format: RENDERED)
                slug
                link
                acfPostTypeUseCase {
                  statsQuotes {
                    statText
                    quote
                    statNumber
                  }
                }
              }
            }
          }
          news {
            newsItem {
              ... on WPGraphQL_Post {
                id
                title(format: RENDERED)
                featuredImage {
                  node {
                    imageFile {
                      childImageSharp {
                        fluid {
                          src
                        }
                      }
                    }
                  }
                }
                acfPostTypeNews {
                  mainImage {
                    mediaItemUrl
                  }
                }
              }
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
