import React from 'react'
import ReflectionComponent from '../reflection-component'

const ImageOverSquareImage = (props) => {
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
                <ReflectionComponent
                    component={
                        <div className="image-wrapper">
                            <img src={props.imageTop} alt={props.imageTop} />
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default ImageOverSquareImage