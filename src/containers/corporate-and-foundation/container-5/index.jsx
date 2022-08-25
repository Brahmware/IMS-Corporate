import React from 'react'
import CardOverRibbonImageContainer from '../../common/card-over-ribbon-image-container'

const CorporateAndFoundationContainerFive = ({ data }) => {
    let random_index = Math.floor(Math.random() * data.length);
    return (
        <div className='corporate-and-foundations-container-5'>
            <CardOverRibbonImageContainer cardribbondata={data[!random_index ? 0 : random_index]} />
        </div>
    )
}

export default CorporateAndFoundationContainerFive