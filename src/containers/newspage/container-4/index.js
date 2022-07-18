import React from 'react'
import CardOverRibbonImageContainer from '../../common/card-over-ribbon-image-container'

const NewsPageContainerFour = ({ data }) => {
    return (
        <div className='newspage-container-4'>
            <CardOverRibbonImageContainer cardribbondata={data[0]} />
        </div>
    )
}

export default NewsPageContainerFour