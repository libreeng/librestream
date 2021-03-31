import React from "react"
import { Link, graphql } from "gatsby"
import Hero from "../../common/ui/Hero"
import { useNews } from "../../common/hooks/useNews"
import PostCard from "../../common/ui/cards/PostCard"
import FooterCTAs from '../../common/ui/FooterCTAs'

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

  return (
    <>
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row mt-5">
            {activeCategory && activeCategory.map(post => {
              const externalLink = post.acfPostTypeNews?.externalSource?.externalLink
              const url = externalLink
                ? externalLink.url
                : post.uri
              return (
                <div key={post.id} className="col-12 col-sm-6 col-lg-4">
                  <Link to={url} target={externalLink ? '_blank' : '_self'}>
                    <PostCard post={post} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <FooterCTAs />
    </>
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