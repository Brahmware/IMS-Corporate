import React from 'react'
import HollowButton from '../buttons/HollowButton'

const FunfactSingleColumnComponent = ( {columnKey, count, cardtitle, cardcontent} ) => {
  return (
    <div
      className='column-card'
      data-aos='fade-up'
      data-aos-duration='600'
      data-aos-delay={300 + columnKey * 300}
    >
      <div className="count">
        <span>{count}</span>
      </div>
      <div className="card-divider" />
      <div className="card-title">
        <span>{cardtitle}</span>
      </div>
      <div className="card-content">
        <span>{cardcontent}</span>
      </div>
      <div className="card-button">
        <HollowButton class={"gray-button"} text={"DISCOVER"} />
      </div>
    </div>
  )
}

export default FunfactSingleColumnComponent