import React from 'react'
import CardOverRibbonImageContainer from '../../common/card-over-ribbon-image-container'

const HomeContainerEleven = ({ data }) => {
    let random_index = Math.floor(Math.random() * data.length);
    return (
        <div className='immersive-experience-container-container-4'>
            <CardOverRibbonImageContainer cardribbondata={data[!random_index ? 0 : random_index]} />
        </div>
    )
}

export default HomeContainerEleven