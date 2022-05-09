import React from 'react'
import ImageOverImageCardContainer from '../common/imageOverImageCardContainer';

const HomeExplorers = (props) => {
    
    return (
        <div className='section home-explorers-section white-background'>
            <ImageOverImageCardContainer containerData={props.data} />
        </div>
    )
}

export default HomeExplorers;