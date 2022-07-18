import React from 'react'
import SpeechContainerOne from './container-1'
import SpeechContainerTwo from './container-2'

const Speech = (props) => {
  const card = props.data
  console.log(card)
    return (
        <>
            <SpeechContainerOne card={card} />
            <SpeechContainerTwo card={card} />
        </>
    )
}

export default Speech