import React from 'react'
import FunfactColumnSpreadContainer from '../../common/funfact-spread-columns-container'

const HomeContainerTwo = ({data}) => {
  return (
    <div className='home-container-2 section-with-padding white-background'>
      <div className="container">
        <FunfactColumnSpreadContainer 
            columnsdata = {data[0].cards}
        />
      </div>
    </div>
  )
}

export default HomeContainerTwo