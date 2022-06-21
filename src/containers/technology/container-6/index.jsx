import React from 'react'
import FunfactColumnSpreadContainer from '../../common/funfact-spread-columns-container'

const TechnologyContainerSix = ({data}) => {
  return (
    <div className='technology-container-6 section-with-padding '>
      <div className="container">
        <FunfactColumnSpreadContainer
            columnsdata = {data[0].cards}
        />
      </div>
    </div>
  )
}

export default TechnologyContainerSix