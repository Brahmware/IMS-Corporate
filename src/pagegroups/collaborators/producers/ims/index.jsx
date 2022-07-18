import React from 'react'
import ImsContainerOne from './container-1'
import ImsContainerTwo from './container-2'

const Ims = (props) => {
    const card = props.data
    return (
        <>
            <ImsContainerOne card={card} />
            <ImsContainerTwo card={card} />
        </>
    )
}

export default Ims