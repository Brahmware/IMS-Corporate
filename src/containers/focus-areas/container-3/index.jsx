import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const FocusAreasContainerThree = ({ data }) => {
    return (
        <div className='become-a-member-container-3 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} inverse={true} />
        </div>
    )
}

export default FocusAreasContainerThree