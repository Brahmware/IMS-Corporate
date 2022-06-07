import React from 'react'
import ImageOverImageCardContainer from '../../common/imageOverImageCardContainer';

const HomeContainerTwo = (props) => {
    
    return (
        <div className='section home-about-section white-background'>
            <ImageOverImageCardContainer containerData={props.data} />
        </div>
    )
}

export default HomeContainerTwo;