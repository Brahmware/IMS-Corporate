import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const ProducersContainerTwo = ({ data }) => {
    return (
        <div className='producers-container-2 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} />
        </div>
    )
}

export default ProducersContainerTwo