import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const AdvertiseWithUsOne = ({data}) => {
  return (
    <div className='advertisewithus-container-1 section-with-padding white-background'>
      <ImageCardContainer data={data[0]} />
    </div>
  )
}

export default AdvertiseWithUsOne