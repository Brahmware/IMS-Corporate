import React from 'react'
import AdvertContainerOne from './container-1'
import AdvertContainerTwo from './container-2'

const Advert = (props) => {
    const card = props.data
    return (
        <>
            <AdvertContainerOne card={card} />
            <AdvertContainerTwo card={card} />
        </>
    )
}

export default Advert