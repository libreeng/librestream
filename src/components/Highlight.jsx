import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Highlight = ({ highlight }) => {
  const iconData = highlight.highlightIcon ? highlight.highlightIcon.localFile.url : false
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='col-6 col-lg-4 mb-3 highlight'>
        <button 
          onClick={() => setOpen(!open)}
          className="card h-100 w-100 d-block justify-content-between border-0 bg-transparent" 
          type="button"
        >
          {iconData && (
            <div className="w-100 p-3 p-lg-4">
              <img src={iconData} className="img-fluid img-highlight rounded-circle hover-glow" alt={highlight.highlightTitle}/>
            </div>
          )}
          <div className="card-body p-0 text-center w-100">
            {highlight.highlightTitle && (
              !open && (
                <h6 className="text-center mt-3 mb-0 w-100 highlight-title">{highlight.highlightTitle}</h6>
              )
            )}
            {open && (
              <div>
                {highlight.highlightDescription && (
                  <p>{highlight.highlightDescription}</p>
                )}
              </div>
            )}
            
          </div>
          <div className="card-footer bg-transparent border-0 w-100">
            <div className="border-bracket-bottom" />
          </div>
        </button>
      </div>
    </>
  )
}

Highlight.propTypes = {

}

export default Highlight
