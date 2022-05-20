import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const ExplorersContainerTwo = ({ data }) => {
    
    return (
        <div className='explorers-container-2 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} />
        </div>
    )
}

export default ExplorersContainerTwo