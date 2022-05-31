import React from 'react'
import ParallaxImageComponent from '../parallax-image-component'

const ImageOverThinImage = (props) => {
  return (
    <div
      className={!props.inverse ? 'image-over-thin-image' : 'image-over-thin-image inverse'}
      data-aos='fade-right'
      data-aos-duration='600'
      data-aos-delay='300'
    >
      <div className='bottom-image'>
        <div className="image-overlay" />
        <ParallaxImageComponent image={props.bottomImage} alt={props.bottomImage} />
      </div>
      <div className="top-image">
        <img src={props.topImage} alt={props.topImage} />
      </div>
    </div>
  )
}

export default ImageOverThinImage