import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const DiversityInclusionContainerThree = ({ data }) => {

    return (
        <div className='diversity-and-inclusion-container-3 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} inverse={true} />
        </div>
    )
}

export default DiversityInclusionContainerThree