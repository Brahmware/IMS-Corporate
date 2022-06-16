import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const AdvertiseWithUsTwo = ({ data }) => {
    return (
        <div className='advertisewithus-container-2 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} inverse={true} />
        </div>
    )
}

export default AdvertiseWithUsTwo