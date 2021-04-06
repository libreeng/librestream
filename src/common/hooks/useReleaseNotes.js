import { useStaticQuery, graphql } from "gatsby"

export const useReleaseNotes = () => {
  const data = useStaticQuery(graphql`
      query ReleaseNotes {
        allWpReleaseNote(sort: {order: DESC, fields: date}) {
          nodes {
            ...ReleaseNoteDetails
          }
        }
      }
    `
  )
  const releaseNotes = data.allWpReleaseNote.nodes

  return { releaseNotes }
}

