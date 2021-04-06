import { graphql } from "gatsby"

export const ReleaseNoteDetails = graphql`
  fragment ReleaseNoteDetails on WpReleaseNote {
    id
    title
    uri
    acfPostTypeReleaseNotes {
      sections {
        title
        content
      }
    }
  }
`