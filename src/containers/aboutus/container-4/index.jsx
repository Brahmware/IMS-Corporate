import React from 'react'
import CenterAlignedCardContainer from '../../common/center-aligned-card-component';

const AboutUsContainerFour = ({ data }) => {
    return (
        <div className='aboutus-container-4 section-with-padding'>
            <CenterAlignedCardContainer data={data[0]} />
        </div>
    )
}

export default AboutUsContainerFour