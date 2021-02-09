import React from 'react'
// import PropTypes from 'prop-types'
import HeroDefault from '../../components/HeroDefault'

const customerSupport = () => {
  return (
    <>
      <HeroDefault title="Customer Support" />
      <section>
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-lg-8">
              <div className="border-bracket text-center">
                <h2>Access Support &amp; Training Docs</h2>
              </div>
              <div className="text-center mt-4 mb-5">
                <a href="#" className="btn btn-primary text-white">Access</a>
              </div>
              <hr className="hr-styled" />
              <h2 className="text-center mt-3">Submit a case</h2>
              !todo form needs recaptcha scripts for react conversion
              <div className="salesforce-form mb-5">
                <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">
                  <input name="captcha_settings" type="hidden" value="{&quot;keyname&quot;:&quot;v2_Librestream_Keys&quot;,&quot;fallback&quot;:&quot;true&quot;,&quot;orgId&quot;:&quot;00DA0000000J3qY&quot;,&quot;ts&quot;:&quot;&quot;}" />
                  <input name="orgid" type="hidden" value="00DA0000000J3qY" />
                  <input name="retURL" type="hidden" value="http://librestream.com/form-confirmations/support-request-confirmation/?previous=http%3A%2F%2Flibrestream.com%2Fonsight-support%2F" />
                  <label htmlFor="name">Contact Name
                    <input id="name" maxLength="80" name="name" size="20" type="text" />
                  </label>
                  <label htmlFor="company">Company
                    <input id="company" maxLength="80" name="company" size="20" type="text" />
                  </label>
                  <label htmlFor="email">Email
                    <input id="email" maxLength="80" name="email" size="20" type="text" />
                  </label>
                  <label htmlFor="phone">Phone
                    <input id="phone" maxLength="40" name="phone" size="20" type="text" />
                  </label>
                  <label htmlFor="subject">Subject
                    <input id="subject" maxLength="80" name="subject" size="20" type="text" />
                  </label>
                  <label htmlFor="description">Description
                    <textarea name="description" />
                  </label>
                  <input id="external" name="external" type="hidden" value="1" />
                  <div className="g-recaptcha" data-sitekey="6Le-x94ZAAAAAD_8zexTMsjTc-Cp3wpdjLu9CImP" data-callback="recaptcha_callback" />
                  <input name="submit" className="btn btn-gradient-dark-blue text-white" type="submit" />
                </form>
              </div>

              <hr className="hr-styled" />
              <h2 className="text-center mt-5">Contact Sales</h2>

              <div className="row">
                <div className="col-lg-8">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero non iure dolor, id ad et autem, sint deleniti molestiae voluptas ipsam! Earum soluta incidunt temporibus cum officiis dolor accusantium omnis.</p>
                  <a href="#" className="btn btn-primary text-white mt-4">Contact Sales Directly</a>
                </div>
                <div className="col-lg-4">
                  <div className="border-bracket">
                    <h6>Phone</h6>
                    <p>1-xxx-xxx-xxxx</p>
                    <h6>North America Toll Free</h6>
                    <p>1-xxx-xxx-xxxx</p>
                    <h6>Fax</h6>
                    <p>1-xxx-xxx-xxxx</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr-styled" />
    </>
  )
}

customerSupport.propTypes = {

}

export default customerSupport
