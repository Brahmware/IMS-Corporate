import React from 'react'
import FunfactColumnSpreadContainer from '../../common/funfact-spread-columns-container'

const SustainabilityStatementContainerThree = ({data}) => {
  return (
    <div className='sustainabilitystatement-container-3 section-with-padding white-background'>
      <div className="container">
        <FunfactColumnSpreadContainer
            columnsdata = {data[0].cards}
        />
      </div>
    </div>
  ) 
}

export default SustainabilityStatementContainerThree
