// /**
//  * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/ssr-apis/
//  */

// // You can delete this file if you're not using it
import React from 'react'
// import { Helmet } from "react-helmet"
// import App from "./App"


// export const wrapRootElement = () => {
//   // if (process.env.NODE_ENV !== `production`) {
//   //   return null
//   // }
//   return App
// }


export const onRenderBody = ({ setPostBodyComponents }) => {
  // const helmet = Helmet.renderStatic()
  // console.log(helmet.htmlAttributes.toString())
  // console.log(helmet.htmlAttributes.toComponent())
  // setHtmlAttributes(helmet.htmlAttributes.toComponent())
  // setBodyAttributes(helmet.bodyAttributes.toComponent())
  // setHeadComponents([
  //   helmet.title.toComponent(),
  //   helmet.link.toComponent(),
  //   helmet.meta.toComponent(),
  //   helmet.noscript.toComponent(),
  //   helmet.script.toComponent(),
  //   helmet.style.toComponent()
  // ])

  setPostBodyComponents([
    <script
      key="driftScript"
      id="driftScript"
      src="/js/drift.js"
      defer
    />,
    // <script
    //   key="cookie"
    //   id="cookie"
    //   src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
    // />,
    // <script
    //   key="testScript"
    //   id="testScript"
    //   src="/js/test.js"
    //   defer
    // />
  ])
}