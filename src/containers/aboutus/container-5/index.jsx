import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const AboutUsContainerFive = ({data}) => {
  return (
    <div className='aboutus-container-5 section-with-padding white-background'>
      <ImageCardContainer data={data[0]} inverse={true}/>
    </div>
  )
}

export default AboutUsContainerFive