import React from 'react'
import FunfactColumnSpreadCardImageContainer from '../../common/funfact-column-spread-card-image-container'

const SustainabilityStatementContainerThree = ({data}) => {
  return (
    <div className='sustainabilitystatement-container-3 section-with-padding white-background'>
      <div className="container">
        <FunfactColumnSpreadCardImageContainer
          columnsdata={data[0]}
          imagecarddata={data[1]}
          inverse={true}
        />
      </div>
    </div>
  )
}

export default SustainabilityStatementContainerThree