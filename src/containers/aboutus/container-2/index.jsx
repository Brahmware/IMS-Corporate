import React from 'react'
import CenterAlignedCardContainer from '../../common/center-aligned-card-component';

const AboutUsContainerTwo = ({ data }) => {
    return (
        <div className='aboutus-container-2 section-with-padding'>
            <CenterAlignedCardContainer data={data[0]} dividercolor='primary' />
        </div>
    )
}

export default AboutUsContainerTwo