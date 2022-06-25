import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const TechnologyContainerOne = ({data}) => {
  return (
    <div className='technology-container-1 section-with-padding white-background'>
      <ImageCardContainer data={data[0]} />
    </div>
  )
}

export default TechnologyContainerOne