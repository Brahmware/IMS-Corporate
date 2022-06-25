import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const InvestorsContainerFour = ({data}) => {
  return (
    <div className='investors-container-1 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} inverse={true }/>
        </div>
  )
}

export default InvestorsContainerFour