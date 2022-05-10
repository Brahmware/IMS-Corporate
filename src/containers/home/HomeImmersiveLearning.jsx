import React from 'react'
import ImageOverImageCardContainer from '../common/imageOverImageCardContainer';

const HomeImmersiveLearning = (props) => {
    return (
        <div className='section home-immersive-learning-section white-background'>
            <ImageOverImageCardContainer containerData={props.data} inverse={true} />
        </div>
    )
}

export default HomeImmersiveLearning;