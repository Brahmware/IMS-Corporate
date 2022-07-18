import React from 'react'
import CorporateContainerOne from './container-1'
import CorporateContainerTwo from './container-2'

const Corporate = (props) => {
    const card=props.data
  return (
      <>
          <CorporateContainerOne card={card}/>
          <CorporateContainerTwo card={card}/>
    </>
  )
}

export default Corporate