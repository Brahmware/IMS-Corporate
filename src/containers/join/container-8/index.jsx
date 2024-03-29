import React from 'react';
import ImageCardContainer from '../../common/image-card-container'

const JoinContainerEight = ({data}) => {
    return (
        <div className='business-and-brands-container-8 section-with-padding'>
            <ImageCardContainer data={data[0]} inverse={true} />
        </div>
    )
}

export default JoinContainerEight