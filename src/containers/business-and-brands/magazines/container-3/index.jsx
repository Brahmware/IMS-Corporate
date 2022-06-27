import React from 'react';
import ImageCardContainer from '../../../common/image-card-container'

const MagazinesContainerThree = ({data}) => {
    return (
        <div className='business-and-brands-container- section-with-padding white-background'>
            <ImageCardContainer data={data[0]} inverse={true}/>
        </div>
    )
}

export default MagazinesContainerThree