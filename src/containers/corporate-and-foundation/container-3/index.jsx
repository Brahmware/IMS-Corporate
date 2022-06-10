import React from 'react'
import ImageCardContainer from '../../common/image-card-container'

const CorporateAndFoundationContainerThree = ({ data }) => {
    return (
        <div className='corporateandfoundations-container-3 section-with-padding white-background'>
            <div className="container">
                <ImageCardContainer data={data[0]} inverse={true} />
            </div>
        </div>
    )
}

export default CorporateAndFoundationContainerThree