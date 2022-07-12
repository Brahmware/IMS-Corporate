import React from 'react'
import PrasarContainerOne from './container-1'
import PrasarContainerTwo from './container-2'

const Prasar = (props) => {
    const card = props.data
    return (
        <>
            <PrasarContainerOne card={card} />
            <PrasarContainerTwo card={card} />
        </>
    )
}

export default Prasar