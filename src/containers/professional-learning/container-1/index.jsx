import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const ProfessionalLearningContainerOne = ({ data }) => {
  return (
    <div className='professional-learning-container-1 section-with-padding white-background'>
      <ImageCardContainer data={data[0]} />
    </div>
  )
}

export default ProfessionalLearningContainerOne