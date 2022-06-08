import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const ResourcesContainerOne = ({ data }) => {
    return (
        <div className='resources-container-1 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} />
        </div>
    )
}

export default ResourcesContainerOne