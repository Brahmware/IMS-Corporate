import React from 'react'
import ImageTopCenterAlignedCardComponent from '../../common/image-top-center-aligned-card-component'

const ProducersContainerOne = ({ data }) => {
  console.log("hello",data)
  return (
    <div className='producers-container-1 section'>
      <ImageTopCenterAlignedCardComponent data={data[0]} dividercolor="primary"/>
    </div>
  )
}

export default ProducersContainerOne