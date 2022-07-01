import React from 'react';
import ImageCardContainer from '../../common/image-card-container'

const PhysicalExperiencesContainerTwo = ({data}) => {
    return (
        <div className='physical-experiences-container-2 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} />
        </div>
    )
}

export default PhysicalExperiencesContainerTwo