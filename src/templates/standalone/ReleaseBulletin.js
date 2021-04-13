import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'

const ReleaseBulletinTemplate = ({ data: { page, allWpReleaseBulletin: { edges } } }) => {
  const bulletins = edges.map(item => item.node)
  const hero = {
    heroHeading: page.title
  }
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <SEO pageSEO={page.seo} />
      <Hero hero={hero} />
      <section>
        <div className="container">
          {bulletins && bulletins.map((bulletin, i) => (
            <div key={`bulletin_${i}`} className="row">
              <div className="col-12 col-md-4">
                <p className="text-mid">
                  <small>{bulletin.date}</small>
                </p>
                <h4>{bulletin.title}</h4>
              </div>
              <div className="col-12 col-md-8">
                <div className="p-4">
                  {parse(bulletin.content)}
                </div>
              </div>
            </div>
          ))}
          <div className="row">
            <div className="col-12">
              {!!page.content && (
                <article className="py-5">{parse(page.content)}</article>
              )}
            </div>
          </div>
        </div>
      </section>
      <FooterCTAs featured={cta} />
    </>
  )
}

export const pageQuery = graphql`
  query ReleaseBulletinTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...FooterCTAs
    }
    allWpReleaseBulletin(sort: {order: DESC, fields: date}) {
      edges {
        node {
          id
          title
          date(formatString: "MMMM DD, YYYY")
          content
        }
      }
    }
  }
`

export default ReleaseBulletinTemplate