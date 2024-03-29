import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const AboutUsContainerOne = ({ data }) => {
  return (
    <div className='aboutus-container-1 section-with-padding white-background'>
      <ImageCardContainer data={data[0]} />
    </div>
  )
}

export default AboutUsContainerOne