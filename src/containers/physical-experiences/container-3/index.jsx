import React from 'react';
import ImageCardContainer from '../../common/image-card-container'

const PhysicalExperiencesContainerThree = ({data}) => {
    return (
        <div className='physical-experiences-container-3 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} inverse={true}/>
        </div>
    )
}

export default PhysicalExperiencesContainerThree