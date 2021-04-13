import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import ModalWrapper from './src/common/modals/ModalWrapper'
import Layout from './src/containers/Layout'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-slideshow-image/dist/styles.css"
import 'remixicon/fonts/remixicon.css'
import './src/styles/main.scss'

const App = ({ element }) => {
  const store = configureStore()

  console.log("element", element)
  return (
    <Provider store={store}>
      <ModalWrapper />
      <Layout>
        {element}
      </Layout>
    </Provider>
  )
}

export default App