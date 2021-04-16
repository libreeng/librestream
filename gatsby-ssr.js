import React from 'react'
// import { Helmet } from "react-helmet"
import App from "./App"


// export const wrapRootElement = () => {
//   if (process.env.NODE_ENV !== `production`) {
//     return null
//   }
//   return App
// }

// export const onPreRenderHTML = ({ replaceHeadComponents, getHeadComponents }) => {
//   const headComponents = getHeadComponents()
//   const helmet = Helmet.renderStatic()
//   // console.log(helmet.htmlAttributes.toString())
//   // console.log(helmet.htmlAttributes.toComponent())
//   // setHtmlAttributes(helmet.htmlAttributes.toComponent())
//   // setBodyAttributes(helmet.bodyAttributes.toComponent())
//   replaceHeadComponents([
//     helmet.title.toComponent(),
//     helmet.link.toComponent(),
//     helmet.meta.toComponent(),
//     helmet.noscript.toComponent(),
//     helmet.script.toComponent(),
//     helmet.style.toComponent()
//   ])
// }

export const onRenderBody = ({ setPostBodyComponents }) => {

  setPostBodyComponents([
    <script
      key="driftScript"
      id="driftScript"
      src="/js/drift.js"
      defer
    />,
  ])
}