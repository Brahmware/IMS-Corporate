import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const BecomeAMemberFour = ({data}) => {
  return (
    <div className='aboutus-container-4 section-with-padding'>
      <ImageCardContainer data={data[0]} inverse={true}/>
    </div>
  )
}

export default BecomeAMemberFour