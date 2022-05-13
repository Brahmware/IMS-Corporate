import React from 'react'

const DIMission = (props) => {
  const sectionData = props.data.elements[0]
  return (
    <div className='section-with-padding home-mission-section'>
      <div className="container">
        <div className="our-mission-container">
          <div className="title">
            <span
              dangerouslySetInnerHTML={{
                __html: sectionData.title
              }}
            />
          </div>
          <div className="subtitle">
            <span
              dangerouslySetInnerHTML={{
                __html: sectionData.subtitle
              }}
            />
          </div>
          <div className="divider" />
          <div className="content">
            <span
              dangerouslySetInnerHTML={{
                __html: sectionData.content
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DIMission