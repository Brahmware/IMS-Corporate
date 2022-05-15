import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const OurLeadershipContainerOne = ( {data} ) => {
  return (
    <div className='our-leasership-container-1 section-with-padding white-background'>
      <ImageCardContainer data = {data[0]} />
    </div>
  )
}

export default OurLeadershipContainerOne