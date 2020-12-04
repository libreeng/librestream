import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import axios from 'axios';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HeroDefault from '../components/HeroDefault'

export const ProductTemplate = ({ data }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Product: {data.acfPostTypeProduct.heroTitle}
              </h2>
              <div
                className="content"                
                dangerouslySetInnerHTML={{ __html: data.acfPostTypeProduct.heroDescription }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProductTemplate.propTypes = {
  //title: PropTypes.string.isRequired,
  //content: PropTypes.string,
}



const Product = ({ data }) => {
  const [pageData, setData] = useState(data.wpcontent); 
  useEffect(() => {
    console.log("TRIGGERING USE EFFECT")
    const fetchData  = async() => {      
      const queryResult = await axios.post (
          process.env.CMS_URL, {        
          query: GET_DATA_QUERY
        }
      )
      if(queryResult.data.data.product){
        console.log("Setting Live Data")
        setData(queryResult.data.data);
      }
    }
    fetchData();
  }, []); 
  
  return (
    <Layout>
      <HeroDefault title={pageData.product.acfPostTypeProduct.heroTitle}/>
      <ProductTemplate data={pageData.product}  />
    </Layout>
  )
}

Product.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Product



export const productQuery = graphql`
  query productById($id: ID!) {
    wpcontent{
      product(id: $id) {
        title
        content
        acfPostTypeProduct {
          heroTitle
          heroDescription
          description
        }
      }
    }
  }
`

// TODO: how do I dynamically populate that ID?
// TODO: How do I load this fragment into the "productQuery" constant above?
const GET_DATA_QUERY  = `
  query postQuery {
    product(id: "cG9zdDo1MTc0") {
      title
      content
      acfPostTypeProduct {
        heroTitle
        heroDescription
        description
      }
    }
  }
`
