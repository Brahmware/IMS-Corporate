import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const CorporateAndFoundationContainerOne = ({ data }) => {
    return (
        <div className='corporateandfoundation-container-1 section-with-padding white-background'>
            <ImageCardContainer data={data[0]} />
        </div>
    )
}

export default CorporateAndFoundationContainerOne