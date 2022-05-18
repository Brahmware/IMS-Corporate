import React from 'react'
import PackedAlternatingImageCardContainer from '../../common/packed-alternating-image-card-container'

const ExplorersContainerTwo = ({ data }) => {

    const cardTopData = data && data.find(datum => datum.id === "cardtop")
    const cardBottomData = data && data.find(datum => datum.id === "cardbottom")
    
    return (
        <div className='explorers-container-container-container-2 white-background'>
            <PackedAlternatingImageCardContainer cardtopdata={cardTopData} cardbottomdata={cardBottomData}/>
        </div>
    )
}

export default ExplorersContainerTwo