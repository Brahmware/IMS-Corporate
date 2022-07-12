import React from 'react'
import TechContainerOne from './container-1'
import TechContainerTwo from './container-2'

const Tech = (props) => {
  const card = props.data
    return (
        <>
            <TechContainerOne card={card} />
            <TechContainerTwo card={card} />
        </>
    )
}

export default Tech