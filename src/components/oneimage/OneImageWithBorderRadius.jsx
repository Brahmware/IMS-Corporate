import React from 'react'

const OneImageWithBorderRadius = (props) => {
  return (
    <div
      className={!props.inverse ? 'one-image' : 'one-image'}
      data-aos='fade-right'
      data-aos-duration='600'
      data-aos-delay='300'
    >
      <div className="border-image">
        <img src={props.image} alt={props.image} />
      </div>
    </div>
  )
}

export default OneImageWithBorderRadius