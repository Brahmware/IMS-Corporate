import React from 'react'
import StandardContainerOne from './container-1'
import StandardContainerTwo from './container-2'

const Standard = (props) => {
    const card=props.data
  return (
      <>
          <StandardContainerOne card={card}/>
          <StandardContainerTwo card={card}/>
    </>
  )
}

export default Standard