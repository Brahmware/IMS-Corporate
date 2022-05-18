import React from 'react'
import ImageTopCenterAlignedCardComponent from '../../common/image-top-center-aligned-card-component'

const ExplorersContainerOne = ({ data }) => {

    return (
        <div className='explorers-container-1 section'>
            <ImageTopCenterAlignedCardComponent data={data[0]} dividercolor="primary"/>
        </div>
    )
}

export default ExplorersContainerOne