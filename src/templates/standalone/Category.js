import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { useFlexSearch } from 'react-use-flexsearch'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import SEO from "../../containers/SEO"
import Hero from "../../common/ui/Hero"
import { useSearch } from "../../common/hooks/useSearch"
import { useNews } from "../../common/hooks/useNews"
import PostCard from "../../common/ui/cards/PostCard"
import ResultCard from "../../common/ui/cards/ResultCard"
import FooterCTAs from '../../common/ui/FooterCTAs'
import Layout from "../../containers/Layout"
// import Filters from "../../common/ui/Filters"

const CategoryTemplate = ({ data: { category } }) => {
  // const template = category.slug.replace(/-./g, x => x[1].toUpperCase()[1]).replace(/^\w/, s => s.toUpperCase())
  const hero = {
    heroHeading: category.name
  }
  const { pressReleases, events, news, videos, webinars, blog } = useNews()
  const map = {
    "in-the-news": news,
    "press-releases": pressReleases,
    "events": events,
    "videos": videos,
    "webinars": webinars,
    "blog": blog
  }
  const activeCategory = map[category.slug]
  const { localSearchPosts: { index, store } } = useSearch()
  const [query, setQuery] = useState('')
  const results = useFlexSearch(query, index, store)

  return (
    <Layout>
      <SEO />
      <Hero hero={hero} />

      <section>
        <div className="container">
          {activeCategory && activeCategory.length > 15 && (
            <>
              <div className="row justify-content-end">
                <div className="col-12">
                  <div className="searchInputWrapper">
                    <input
                      className="searchInput"
                      name="query"
                      placeholder="Search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <SearchLineIcon size="25" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <hr className="hr-styled my-5" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {query && (
                    results.length > 0 ? (
                      <>
                        <h3 className="text-dark text-uppersace mt-4">{results.length} results for &quot;{query}&quot;</h3>
                        <hr className="hr-styled my-5 caret-left" />
                        <div className="row">
                          {results.map(result => <ResultCard key={result.url} result={result} />)}
                        </div>
                      </>
                    ) : (
                      <div className="alert alert-light text-center my-4"><h3 className="text-dark text-uppersace mt-4">{results.length} results for &quot;{query}&quot;</h3></div>
                    )
                  )}
                </div>
              </div>
            </>
          )}

          <div className="row mt-5">
            {!results.length && activeCategory && activeCategory.map(post => {
              const externalLink = post.acfPostTypeNews?.externalSource?.externalLink
              const url = externalLink
                ? externalLink.url
                : post.uri
              return (
                <div key={post.id} className="col-12 col-sm-6 col-lg-4">
                  <Link
                    to={url}
                    target={externalLink ? '_blank' : '_self'}
                    rel={externalLink ? 'noopener' : ''}
                  >
                    <PostCard post={post} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <FooterCTAs />
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryQuery($id: String!) {
    # selecting the current page by id
    category: wpCategory(id: { eq: $id }) {
      id
      name
      slug
      posts {
        nodes {
          ...PostDetails
        }
      }
    }
  }
`

export default CategoryTemplate