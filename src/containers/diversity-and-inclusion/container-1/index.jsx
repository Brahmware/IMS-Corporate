import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const DiversityInclusionContainerOne = ({ data }) => {
    return (
        <div className='diversity-and-inclusion-container-1 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} />
        </div>
    )
}

export default DiversityInclusionContainerOne