import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const ProducersContainerOne = ({ data }) => {
    return (
        <div className='producers-container-1 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} />
        </div>
    )
}

export default ProducersContainerOne