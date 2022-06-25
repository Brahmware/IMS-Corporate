import React from 'react'
import ImageTopCenterAlignedCardComponent from '../../common/image-top-center-aligned-card-component'

const TechnologyContainerFive = ({ data }) => {
  return (
    <div className='technology-container-1 '>
      <ImageTopCenterAlignedCardComponent data={data[0]} dividercolor="primary"/>
    </div>
  )
}

export default TechnologyContainerFive