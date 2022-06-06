import React from 'react'
import CenterAlignedCardContainer from '../../common/center-aligned-card-component';

const HomeContainerOne = ({ data }) => {
    return (
        <div className='home-container-1 section-with-padding'>
            <CenterAlignedCardContainer data={data[0]} dividercolor='primary' />
        </div>
    )
}

export default HomeContainerOne