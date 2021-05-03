import React from 'react'
import PropTypes from 'prop-types'
import parse from "html-react-parser"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function onVisibilityChange (isVisible) {
  console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
}

const Stats = ({ stats }) => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          {stats && stats.map(({ numberPrefix, number, descriptor, caption }, i) => {

            return (
              <div key={`stat_${i}`} className="col-12 col-sm-6 col-lg-3">
                
                <div className="stat">
                  <div className="stat-number">
                    {numberPrefix && (
                      <span className="stat-descriptor">{numberPrefix}</span>
                    )}
                    <CountUp start={0} end={number && number} redraw={true} >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} partialVisibility={true} delayedCall={true}>                             
                          <span ref={countUpRef} />                             
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    {descriptor && (
                      <span className="stat-descriptor">{descriptor}</span>
                    )}
                  </div>
                  {caption && (
                    <h6 className="stat-caption text-uppercase">{parse(caption)}</h6>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

Stats.propTypes = {
  stats: PropTypes.instanceOf(Array)
}

export default Stats
