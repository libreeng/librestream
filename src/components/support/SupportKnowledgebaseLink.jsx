import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import {embedUrl} from "../../common/utils/helpers"
import { openModal } from "../../common/modals/modalActions"


const SupportKnowledgebaseLink = ({ link }) => {
  let dispatch = () => { }
  if (typeof window !== 'undefined') {
    dispatch = useDispatch()
  }

  return (
    <div>
      {{
          'Content': (
            link.content
            ? <button
                onClick={() => dispatch(openModal("SupportModal", { content: link.content }))}
                type="button" className="border-0 bg-transparent p-0 text-primary">{link.linkText}&nbsp;(Modal)</button>
            : <p>{link.linkText}</p>
          ),
          'External URL': (
            <a href={embedUrl(link.url)} target="_blank" rel="noopener">{link.linkText} (Link)</a>
          ),
          'Video': (
            <button
              onClick={() => dispatch(openModal("VideoModal", { embed: link.videoEmbed, video: link.videoMp4.mediaItemUrl, title: link.linkText }))}
              type="button" className="border-0 bg-transparent p-0 text-primary">{link.linkText}&nbsp;(Video)</button>
          ),
          'PDF': (
            <a href={embedUrl(link.pdf?.localFile?.publicURL)} target="_blank" rel="noreferrer" className="text-underline">{link.linkText} (PDF)</a>
          )
      }[link.linkType]}
    </div>
  )
}

SupportKnowledgebaseLink.propTypes = {
  link: PropTypes.instanceOf(Object),
}

export default SupportKnowledgebaseLink
