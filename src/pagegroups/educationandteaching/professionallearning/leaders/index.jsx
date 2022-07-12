import React from 'react'
import LeadersContainerOne from './container-1'
import LeadersContainerTwo from './container-2'

const Leaders = (props) => {
    const card=props.data
  return (
      <>
          <LeadersContainerOne card={card}/>
          <LeadersContainerTwo card={card}/>
    </>
  )
}

export default Leaders