import React from 'react'
import ImageWithBorderRadius from '../../common/imagewithborderradius'


const LeadershipWhatWeDo = (props) => {
    return (
        <div className='section home-about-section white-background'>
            <ImageWithBorderRadius containerData={props.data} />
        </div>
    )
}

export default LeadershipWhatWeDo