import React from 'react'
import CenterAlignedCardContainer from '../../common/center-aligned-card-component';

const HomeContainerThree = ({ data }) => {
    return (
        <div className='home-container-3 section-with-padding'>
            <CenterAlignedCardContainer data={data[0]} dividercolor='primary'/>
        </div>
    )
}

export default HomeContainerThree