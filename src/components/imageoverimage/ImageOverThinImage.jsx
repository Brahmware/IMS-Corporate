import React from 'react'

const ImageOverThinImage = (props) => {
  return (
    <div className={!props.inverse ? 'image-over-thin-image' : 'image-over-thin-image inverse'}>
        <div className='bottom-image'>
            <div className="image-overlay" />
            <img src={props.bottomImage} alt={props.bottomImage} />
        </div>
        <div className="top-image">
            <img src={props.topImage} alt={props.topImage} />
        </div>
    </div>
  )
}

export default ImageOverThinImage