import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const BecomeAMemberOne = ({ data }) => {
  console.log(data)
  return (
    <div className='become-a-member-container-1 section-with-padding white-background'>
      <ImageCardContainer data={data[0]} />
    </div>
  )
}

export default BecomeAMemberOne