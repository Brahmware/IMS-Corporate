import React from 'react'

const DIExplorers = (props) => {
  const card = props.data.elements[0].card
  return (
    <div className='section-with-padding ims-explorers '>
      <div className="container">
        <div className="sub-section">
          <div className="title">
            <span
              dangerouslySetInnerHTML={{
                __html: card.title
              }}
            />
          </div>
          <div className="subtitle">
            <span
              dangerouslySetInnerHTML={{
                __html: card.subtitle
              }}
            />
          </div>
          <button className="btn btn-outline-light btn-large rounded-pill px-5 fs-5 mt-3 border-2">APPLY</button>
        </div>
      </div>
    </div>
  )
}

export default DIExplorers