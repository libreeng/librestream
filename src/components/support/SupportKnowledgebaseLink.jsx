import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import { openModal } from "../../common/modals/modalActions"


const SupportKnowledgebaseLink = ({ link }) => {
  const dispatch = useDispatch();
  return (
    <div>
      
      {(link.linkType === 'Content' && !link.content && (
        <p>{link.linkText}</p>
      )  
      || (link.linkType === 'Content' && link.content &&
          link.content && (
          <button onClick={() => dispatch(openModal("SupportModal", { content: link.content }))} type="button" className="border-0 bg-transparent p-0 text-primary">{link.linkText}&nbsp;(Modal)</button>
      ))
      || (link.linkType === 'External URL' && (
        <a href={link.url} target="_blank" rel="noreferrer">{link.linkText} (Link)</a>
      ))
      || (link.linkType === 'Video' && (
        <button onClick={() => dispatch(openModal("VideoModal", { embed: link.videoEmbed, video: link.videoMp4.mediaItemUrl, title: link.linkText }))} type="button" className="border-0 bg-transparent p-0 text-primary">{link.linkText}&nbsp;(Video)</button>
      ))
      || (link.linkType === 'PDF' &&
        <a href={link.pdf.localFile.publicURL} target="_blank" rel="noreferrer" className="text-underline">{link.linkText} (PDF)</a>
      ))}
      {/* <p>{link.videoEmbed && link.videoEmbed}</p>
      <p>{link.videoMp4 && link.videoMp4.mediaItemUrl}</p> */}
      {/* not sure where in the design faqs are supposed to be output */}
      {/* <p>
        {link.faqs && link.faqs.map(faq => (
          <>
            <p>{faq.question}</p>
            <p>{faq.answer}</p>
          </>
        ))}
      </p> */}
    
    </div>
  )
}

SupportKnowledgebaseLink.propTypes = {
  link: PropTypes.instanceOf(Object),
}

export default SupportKnowledgebaseLink
