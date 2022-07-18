import React from 'react'
import CardOverRibbonImageContainer from '../../../../../containers/common/card-over-ribbon-image-container'

const EducatorContainerTwo = ({ card }) => {
    const data=card
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    return (
        <div className='producers-container-container-container-5'>
            <CardOverRibbonImageContainer cardribbondata={dataContainer2[0]} />
        </div>
    )
}

export default EducatorContainerTwo 