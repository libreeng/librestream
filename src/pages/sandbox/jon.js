import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import HeroDefault from '../../components/HeroDefault'
import Card from '../../components/Card'


const SandboxPageJon = () => {
  const data = useStaticQuery(graphql`
    query TestQuery {
      logo: file(relativePath: {eq: "logo.png"}) {
        publicURL
        absolutePath
        childImageSharp {
          fixed {
           srcWebp
          }
        }
      }      
    }
  `)
  console.log(data.logo.childImageSharp.fixed.srcWebp)
  return (
  <Layout>
    <HeroDefault title="Hero Default" />
    <section className="bg-white">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1>jon's Sandbox</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div className="col mb-4">
            <div className="card">
              <div className="card-img-top bg-image aspect-1x1"
                style={{
                backgroundImage: `url(https://picsum.photos/500)`
                }}>
                <div className="bg-fill">
                  <div className="card-logo-overlay text-white">
                    <div className="row">
                      <div className="col-lg-6">
                        <img src={data.logo.childImageSharp.fixed.srcWebp} className="img-fluid" alt="alt text"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ml-lg-auto">
                        <p class="text-uppercase">
                          Saves XX% in Overall Productivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
              <div class="card-footer bg-transparent text-primary text-center text-uppercase">
                <h4>Find out how nov saved up to 70% in total productivity</h4>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <div className="card-img-top bg-image aspect-1x1"
                style={{
                backgroundImage: `url(https://picsum.photos/500)`
                }}>
                <div className="bg-fill">
                  <div className="card-logo-overlay text-white">
                    <div className="row">
                      <div className="col-lg-6">
                        <img src={data.logo.childImageSharp.fixed.srcWebp} className="img-fluid" alt="alt text"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ml-lg-auto">
                        <p class="text-uppercase">
                          Saves XX% in Overall Productivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
              <div class="card-footer bg-transparent text-primary text-center text-uppercase">
                <h4>Find out how nov saved up to 70% in total productivity</h4>
              </div>
            </div>
          </div>
          
          
          <div className="col mb-4">
            <div className="card">
              <div className="card-img-top bg-image aspect-1x1"
                style={{
                backgroundImage: `url(https://picsum.photos/500)`
                }}>
                <div className="bg-fill">
                  <div className="card-logo-overlay">
                    <div className="row">
                      <div className="col-lg-6">
                        <img src={data.logo.childImageSharp.fixed.srcWebp} className="img-fluid" alt="alt text"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ml-lg-auto">
                        <p class="text-uppercase">
                          Saves XX% in Overall Productivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
              <div class="card-footer bg-transparent text-primary text-center text-uppercase">
                <h4>Find out how nov saved up to 70% in total productivity</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </Layout>
  )
}

export default SandboxPageJon