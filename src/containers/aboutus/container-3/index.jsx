import React from 'react'
import FunfactColumnSpreadCardImageContainer from '../../common/funfact-column-spread-card-image-container'

const AboutUsContainerThree = ({data}) => {
  return (
    <div className='aboutus-container-3 white-background'>
        <FunfactColumnSpreadCardImageContainer 
            columnsdata = {data[0]}
            imagecarddata = {data[1]}
            inverse={true}
        />
    </div>
  )
}

export default AboutUsContainerThree