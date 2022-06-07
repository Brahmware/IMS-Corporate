import React from 'react'
import ImageOverImageCardContainer from '../../common/imageOverImageCardContainer';

const HomeContainerSix = (props) => {
    return (
        <div className='section home-immersive-learning-section white-background'>
            <ImageOverImageCardContainer containerData={props.data} inverse={true} />
        </div>
    )
}

export default HomeContainerSix;