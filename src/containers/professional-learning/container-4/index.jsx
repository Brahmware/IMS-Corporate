import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const ProfessionalLearningContainerFour = ({ data }) => {
    return (
        <div className='immersive-experience-container-1 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} inverse={true } />
        </div>
    )
}

export default ProfessionalLearningContainerFour