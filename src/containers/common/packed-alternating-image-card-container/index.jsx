import React from 'react'
import ImageCardContainer from '../image-card-container'

const PackedAlternatingImageCardContainer = ({ cardtopdata, cardbottomdata }) => {
    return (
        <div className='packed-alternating-image-card-container section-with-padding'>
            <ImageCardContainer data={cardtopdata} />
            <ImageCardContainer data={cardbottomdata} inverse={true} />
        </div>
    )
}

export default PackedAlternatingImageCardContainer