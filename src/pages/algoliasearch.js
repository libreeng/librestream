import React from 'react'
import Layout from "../containers/Layout"
import Hero from '../common/ui/Hero'
import FooterCTAs from '../common/ui/FooterCTAs'
import Search from "../components/search/search"
const searchIndices = [
  { name: `LibrestreamSite`, title: `Pages` },
]


export default function SearchPage() {

  const hero = {heroHeading: "Search Results"}  

  return (
    <Layout>
      
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5 searchResults">
              <Search indices={searchIndices} />
            </div>
          </div>
        </div>
      </section>
      <FooterCTAs />
    </Layout>
  )
}




// use different useFlexSearch hooks for each post type
// https://githubmemory.com/repo/angeloashmore/gatsby-plugin-local-search/issues/23

