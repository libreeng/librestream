import { useStaticQuery, graphql } from "gatsby"

export const useSearch = () => {
  const data = useStaticQuery(graphql`
    query SearchAll {
      localSearchPosts {
        index
        store
      }
    }`
  )
  const { localSearchPosts } = data




  return { localSearchPosts }
}

