/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import App from "./App"

export const wrapRootElement = () => {
  if (process.env.NODE_ENV !== `production`) {
    return null
  }
  return App
}

export const onRenderBody = ({ setPostBodyComponents }) => {
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
    // />,
    // <script
    //   key="lsInitScript"
    //   id="lsInitScript"
    //   src="https://livesupporti.com/Scripts/clientAsync.js?acc=848b298c-f82a-4868-a975-2cd8aae81c0b&skin=Classic"
    //   defer
    // />
  ])
}