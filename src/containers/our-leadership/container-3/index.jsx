import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const OurLeadershipContainerThree = ({ data }) => {
  return (
    <div className='our-leasership-container-3 section-with-padding white-background'>
      <ImageCardContainer data={data[0]} inverse={true}/>
    </div>
  )
}

export default OurLeadershipContainerThree