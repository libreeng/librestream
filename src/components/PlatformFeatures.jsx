import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'
import parse from "html-react-parser"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";


const PlatformFeatures = ({ content }) => {
  const { heading, description, footer, features } = content
  const [key, setKey] = useState('0')

  return <>
    <section className="bg-dark text-white">
      <div className="container">
        <div className="row my-5">
          <div className="col-12">
            {heading && (
              <h2 className="text-uppercase">{parse(heading)}</h2>
            )}
            {description && parse(description)}

          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              {features && features.map((feature, i) => {
                const {link: {title, target, url}} = feature
                const featuredImage = feature.featuredImage ? feature.featuredImage.localFile?.childImageSharp?.gatsbyImageData : false
                return (
                  <Tab key={`tab_${i}`} eventKey={i} title={feature.heading}>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <GatsbyImage
                          image={featuredImage}
                          alt={feature.featuredImage.alt}
                          style={{ marginBottom: 50 }} />
                      </div>
                      <div className="col-12 col-md-6">
                        <h3 className="h2">{feature.heading}</h3>
                        <hr className="hr-xs ml-0 border-green" />
                        <p>{parse(feature.summary)}</p>
                        <p>
                          <Link to={url} target={target} className="btn btn-secondary btn-block my-5" title={title}>Learn More</Link>
                        </p>
                      </div>
                    </div>
                  </Tab>
                );
              })}
            </Tabs>

            {footer && (
              <>
                <hr className="hr-white mb-5" />
                <div className="row">
                  <div className="col-lg-4 border-left border-primary">
                    {footer.heading && <h3>{parse(footer.heading)}</h3>}
                  </div>
                  <div className="col-lg-4 border-left border-primary">
                    {footer.summary && footer.summary}
                  </div>
                  {footer.checklist && footer.checklist.length > 0 && (
                    <div className="col-lg-4 border-left border-primary">
                      <ul className="checklist">
                        {footer.checklist?.checklistItem?.map((item, i) =>
                          <li key={`checklist_${i}`}>{item.checklistItem}</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  </>;
}

PlatformFeatures.propTypes = {

}

export default PlatformFeatures
