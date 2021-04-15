import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-slideshow-image/dist/styles.css"
import 'remixicon/fonts/remixicon.css'
import './src/styles/main.scss'

import App from "./App"
export const wrapRootElement = App

// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) {
//     import(`intersection-observer`)
//     console.log(`# IntersectionObserver is polyfilled!`)
//   }
// }