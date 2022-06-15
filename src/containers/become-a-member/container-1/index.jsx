import React from 'react'
// import ImageCardContainer from '../../common/image-card-container'
import ImageTopCenterAlignedCardComponent from '../../common/image-top-center-aligned-card-component'

const BecomeAMemberOne = ({ data }) => {
  return (
    <div className='become-a-member-container-1 section'>
      {/* <ImageCardContainer data={data[0]} /> */}
      <ImageTopCenterAlignedCardComponent data={data[0]} dividercolor="primary"/>
    </div>
  )
}

export default BecomeAMemberOne