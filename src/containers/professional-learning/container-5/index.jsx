import React from 'react'
import CardOverRibbonImageContainer from '../../common/card-over-ribbon-image-container'

const ProfessionalLearningContainerFive = ({ data }) => {
    let random_index = Math.floor(Math.random() * data.length);
    return (
        <div className='professional-learning-container-container-4'>
            <CardOverRibbonImageContainer cardribbondata={data[!random_index ? 0 : random_index]} />
        </div>
    )
}

export default ProfessionalLearningContainerFive