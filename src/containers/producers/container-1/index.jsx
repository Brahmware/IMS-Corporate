import React from 'react'
import ImageTopCenterAlignedCardComponent from '../../common/image-top-center-aligned-card-component'

const ProducersContainerOne = ({ data }) => {
  return (
    <div className='producers-container-1 section section-padding-03-min'>
      <ImageTopCenterAlignedCardComponent data={data[0]} dividercolor="primary"/>
    </div>
  )
}

export default ProducersContainerOne