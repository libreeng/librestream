import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../common/ui/Hero"
import ReleaseNotesNav from '../components/ReleaseNotesNav'

const ReleaseNoteTemplate = ({ data: { post } }) => {
  const { title, acfPostTypeReleaseNotes: { sections } } = post
  const hero = {
    heroHeading: "Release Notes"
  }

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
          </div>
        </div>
      </div>

    </>
  )
}

export const pageQuery = graphql`
  query ReleaseNoteQuery($id: String!) {
    # selecting the current page by id
    post: wpReleaseNote(id: { eq: $id }) {
      ...ReleaseNoteDetails
    }
  }
`

export default ReleaseNoteTemplate