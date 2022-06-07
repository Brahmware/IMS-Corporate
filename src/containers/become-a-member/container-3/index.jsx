import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const BecomeAMemberThree = ({ data }) => {
  return (
    <div className='corporate-and-foundations-container-3 section-with-padding white-background'>
      <ImageCardContainer data={data[0]} inverse={true}/>
    </div>
  )
}

export default BecomeAMemberThree