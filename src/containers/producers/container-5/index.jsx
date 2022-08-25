import React from 'react'
import CardOverRibbonImageContainer from '../../common/card-over-ribbon-image-container'

const ProducersContainerFive = ({ data }) => {
    let random_index = Math.floor(Math.random() * data.length);
    return (
        <div className='producers-container-container-container-5'>
            <CardOverRibbonImageContainer cardribbondata={data[!random_index?0:random_index]} />
        </div>
    )
}

export default ProducersContainerFive