import React from 'react'
import { graphql } from 'gatsby'
import HeroHome from '../../components/HeroHome'
import CarouselBootstrap from '../../components/CarouselBootstrap'
import Card from '../../components/Card'
import Stat from '../../components/Stat'
import CustomerUseCases from '../../components/CustomerUseCases'

const templateHome = ({ data }) => {

  // const { title,content } = data.wpcontent.page
  // const {
  //   title,
  //   description,
  //   linkType,
  //   linkText,
  //   internal,
  //   videoMp4,
  //   videoEmbed,
  //   videoDescription,
  //   slider,
  //   homeStat,
  //   useCases,
  //   news } = data.wpcontent.page.acfTemplateHome

  return (
    <>
      <HeroHome data={data} />
      <section className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 mx-lg-auto">
              <div className="text-center">
                <h2 className="mb-4 font-weight-light">
                  {title}
                </h2>
                <div
                  className="lead lead-lg text-gray mb-5"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <a href={internal.uri} className="btn btn-large btn-cyan">{linkText}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerUseCases />

      <section className="bg-gradient-blue text-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <CarouselBootstrap />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white folder-border folder-top">
        <div className="container">
          <div className="row">
            {homeStat && homeStat.map((stat, index) => (
              <Stat key={index} />
              // <div className="col-12 col-md-6 col-lg-3" key={index}>
              //   <div className="display-1">{homeStat.homeStatValue}</div>
              //   <p className="text-uppercase lead border-left border-dark">{homeStat.homeStatLabel}</p>
              // </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="hr-styled" />
      <section className="bg-white">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h3>Featured News</h3>
            </div>
          </div>
          <div className="row">
            {news && news.map((newsItem) => (
              <div className="col-12 col-md-6 col-lg-3" key={newsItem.newsItem.id}>
                <Card title={newsItem.newsItem.title} />
              </div>
            ))}
          </div>
          <div className="row my-5">
            <div className="col-12">
              <div className="text-center">
                <a href="/news" className="btn btn-primary text-white">View All News</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/*
templateDefault.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}
*/

export default templateHome

// export const pageQuery = graphql`
//   query HomeById($id: ID!) {
//     homeHeroBkg: file(name: {eq: "home_hero_bkg"}) {
//       publicURL
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }

//     homeHeroWorker: file(name: { eq: "home_hero_worker" }) {
//       publicURL
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }

//     wpcontent{
//       page(id: $id) {
//         title
//         content
//         acfTemplateHome {
//           title
//           description
//           homeStat {
//             homeStatLabel
//             homeStatValue
//           }
//           linkType
//           linkText
//           internal {
//             ... on WPGraphQL_Product {
//               id
//               title(format: RAW)
//               uri
//             }
//             ... on WPGraphQL_Solution {
//               id
//               title(format: RAW)
//               uri
//             }
//             ... on WPGraphQL_Post {
//               id
//               title(format: RAW)
//               uri
//             }
//             ... on WPGraphQL_Page {
//               id
//               uri
//               title(format: RAW)
//             }
//           }
//           useCases {
//             useCase {
//               ... on WPGraphQL_CaseStudy {
//                 id
//                 title(format: RENDERED)
//                 slug
//                 link
//                 acfPostTypeUseCase {
//                   statsQuotes {
//                     statText
//                     quote
//                     statNumber
//                   }
//                 }
//               }
//             }
//           }
//           news {
//             newsItem {
//               ... on WPGraphQL_Post {
//                 id
//                 title(format: RENDERED)
//                 featuredImage {
//                   node {
//                     imageFile {
//                       childImageSharp {
//                         fluid {
//                           src
//                         }
//                       }
//                     }
//                   }
//                 }
//                 acfPostTypeNews {
//                   mainImage {
//                     mediaItemUrl
//                   }
//                 }
//               }
//             }
//           }
//           videoMp4 {
//             sourceUrl(size: LARGE)
//           }
//           videoEmbed
//           videoDescription

//         }
//       }
//     }
//   }
// `
