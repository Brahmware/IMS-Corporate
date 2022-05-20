import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const ExplorersContainerFour = ({data}) => {
  return (
    <div className='explorers-container-4 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} inverse={true} />
        </div>
  )
}

export default ExplorersContainerFour