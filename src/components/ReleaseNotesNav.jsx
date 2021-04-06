import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useReleaseNotes } from '../common/hooks/useReleaseNotes'


const ReleaseNotesNav = () => {
  const { releaseNotes } = useReleaseNotes()

  return (
    <ul className="nav flex-column my-5">
      {releaseNotes && releaseNotes.map(({id, title, uri}) => (
        <li className="nav-item text-primary border-bottom py-2" key={id}>
          <Link to={uri}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

ReleaseNotesNav.propTypes = {

}

export default ReleaseNotesNav
