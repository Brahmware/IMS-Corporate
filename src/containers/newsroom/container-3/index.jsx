import React from 'react'
import CardOverRibbonImageContainer from '../../common/card-over-ribbon-image-container'

const NewsRoomContainerThree = ({data}) => {
  return (
    <div className='newsroom-container-3'>
      <CardOverRibbonImageContainer cardribbondata = {data[0]}/>
    </div>
  )
}

export default NewsRoomContainerThree