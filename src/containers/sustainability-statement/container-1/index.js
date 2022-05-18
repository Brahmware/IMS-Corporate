import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const SustainabilityStatementOne = ({data}) => {
  return (
    <div className='sustainabilitystatement-container-1 section-with-padding white-background'>
      <ImageCardContainer data={data[0]} />
    </div>
  )
}

export default SustainabilityStatementOne