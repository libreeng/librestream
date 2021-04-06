import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useReleaseBulletins } from '../common/hooks/useReleaseBulletins'


const ReleaseBulletinsNav = () => {
  const { releaseBulletins } = useReleaseBulletins()

  return (
    <ul className="nav flex-column mb-0">
      {releaseBulletins && releaseBulletins.map(({ id, title, uri }) => (
        <li className="nav-item text-primary border-bottom py-2" key={id}>
          <Link to={uri}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

ReleaseBulletinsNav.propTypes = {

}

export default ReleaseBulletinsNav