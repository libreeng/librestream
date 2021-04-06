import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'
import ReleaseNotesNav from "../../components/ReleaseNotesNav"
import { useReleaseNotes } from '../../common/hooks/useReleaseNotes'


const ReleaseNotesTemplate = ({ data: { page } }) => {
  const { releaseNotes } = useReleaseNotes()
  const { title, acfPostTypeReleaseNotes: { sections } } = releaseNotes[0]
  const hero = {
    heroHeading: page.title
  }
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <Hero hero={hero} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <ReleaseNotesNav />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className="p-5">
              <h2>{title}</h2>
              {sections && sections.map((section, i) => (
                <div key={`section_${i}`} className="border-bottom py-3">
                  <h3 className="text-mid">{section.title}</h3>
                  {parse(section.content)}
                </div>
              ))}
            </div>
            {!!page.content && (
              <article className="py-5">{parse(page.content)}</article>
            )}
          </div>
        </div>
      </div>

      <FooterCTAs featured={cta} />
    </>
  )
}

export const pageQuery = graphql`
  query ReleaseNotesTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...FooterCTAs
    }
  }
`

export default ReleaseNotesTemplate