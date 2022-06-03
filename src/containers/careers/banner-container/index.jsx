import React from 'react'
import CardOverRibbonImageContainer from '../../common/card-over-ribbon-image-container'

const CareersBannerContainer = ({data}) => {
  return (
    <div className='career-banner-container'>
      <CardOverRibbonImageContainer cardribbondata={data[0]} />
    </div>
  )
}

export default CareersBannerContainer