import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import HeroDefault from '../../components/HeroDefault'
import CardWithLogo from '../../components/CardWithLogo'
import CarouselWithContent from '../../components/CarouselWithContent'


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
    <section>
      <CarouselWithContent></CarouselWithContent>
    </section>
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
        <div className="row">
          <div className="col-12">
            <h2>Scroll x example</h2>
          </div>
        </div>
      </div>
    </section>
    
    <section className="bg-white">
      <div className="scrolling-wrapper">
        <div className="row flex-nowrap row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div className="col mb-4">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="col mb-4">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="col mb-4">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="col mb-4">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="col mb-4">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="col mb-4">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>AutoScroll x example</h2>
          </div>
        </div>
      </div>
    </section>
    
    <section className="bg-white">

        <div className="ticker ticker-6">
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
          <div className="ticker-item">
            <CardWithLogo logo={data.logo.childImageSharp.fixed.srcWebp}></CardWithLogo>
          </div>
        </div>

    </section>
  </Layout>
  )
}

export default SandboxPageJon