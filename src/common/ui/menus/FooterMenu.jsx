import React from 'react'
// import PropTypes from 'prop-types'
import { useSiteFooter } from '../../hooks/useSiteFooter'

const FooterMenu = () => {
  const { menuItems } = useSiteFooter()
  const menu = menuItems.filter(node => !node.parentId)
  return (
    <div className="container">
      <div className="row py-3">
        {menu && menu.map(item => {
          const submenu = menuItems.filter(node => node.parentId === item.id)

          return submenu.length > 0 ? (
            <div className="col-12 col-md-4 col-lg-2 mb-3 mb-md-0" key={item.id}>
              <h6 className="text-dark">
                <strong>{item.label}</strong>
              </h6>
              <ul className="nav flex-column">
                {submenu.map(child => (
                  <li key={child.id} className="nav-item pb-0">
                    <a href={child.path} className="nav-link">{child.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="col-12 col-md-4 col-lg-2 mb-3 mb-md-0" key={item.id}>
              <h6>
                <a href={item.path} className="text-dark">{item.label}</a>
              </h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

FooterMenu.propTypes = {

}

export default FooterMenu
