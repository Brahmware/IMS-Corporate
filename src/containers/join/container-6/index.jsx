import React from 'react'
// import ImageCardContainer from '../../common/image-card-container'
import ImageTopCenterAlignedCardComponent from '../../common/image-top-center-aligned-card-component'

const JoinContainerSix = ({ data }) => {
  return (
    <div className='join-container-6 section'>
      <ImageTopCenterAlignedCardComponent data={data[0]} dividercolor="primary" largeheading={ true}/>
    </div>
  )
}

export default JoinContainerSix