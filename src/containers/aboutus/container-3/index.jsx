import React from 'react'
import FunfactColumnSpreadContainer from '../../common/funfact-spread-columns-container'

const AboutUsContainerThree = ({data}) => {
  return (
    <div className='aboutus-container-3 section-with-padding white-background'>
      <div className="container">
        <FunfactColumnSpreadContainer 
            columnsdata = {data[0].cards}
        />
      </div>
    </div>
  )
}

export default AboutUsContainerThree