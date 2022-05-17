import React from 'react'
import FunfactColumnSpreadContainer from '../funfact-spread-columns-container'
import ImageCardContainer from '../image-card-container'

const FunfactColumnSpreadCardImageContainer = ({ columnsdata, imagecarddata, inverse }) => {

    return (
        <div className="funfact-column-spread-card-image-container">
            <div className="columns-part section-with-padding">
                <div className="container">
                    <FunfactColumnSpreadContainer columnsdata={columnsdata.cards} />
                </div>
            </div>
            <div className="image-card-part section-with-padding">
                <ImageCardContainer data={imagecarddata} inverse={inverse} />
            </div>
        </div>
    )
}

export default FunfactColumnSpreadCardImageContainer