import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const TechnologyContainerThree = ({data}) => {
  return (
    <div className='technology-container-3 section-with-padding white-background'>
      <ImageCardContainer data={data[0]} />
    </div>
  )
}

export default TechnologyContainerThree