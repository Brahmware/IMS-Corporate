import React from 'react'

const ImageOverSquareImage = ( props ) => {
    return (
        <div
          className={!props.inverse ? 'image-over-square-image' : 'image-over-square-image inverse'}
          data-aos='fade-left'
          data-aos-duration='600'
          data-aos-delay='300'
        >
          <div className='bottom-image'>
            <div className="image-overlay" />
            <img src={props.imageBottom} alt={props.imageBottom} />
          </div>
          <div className="top-image">
            <img src={props.imageTop} alt={props.imageTop} />
          </div>
        </div>
      )
}

export default ImageOverSquareImage