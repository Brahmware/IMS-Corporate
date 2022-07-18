import React from 'react'
import EducatorContainerOne from './container-1'
import EducatorContainerTwo from './container-2'

const Educator = (props) => {
    const card=props.data
  return (
      <>
          <EducatorContainerOne card={card}/>
          <EducatorContainerTwo card={card}/>
    </>
  )
}

export default Educator