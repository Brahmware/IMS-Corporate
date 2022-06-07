import React from 'react'
import ImageWithTabBox from '../../../containers/common/imagewithtabbox'

const JoinContainerFive = (props) => {
    const data=props.data[0]
    return (
        <div className="pb-5 white-background">
            <ImageWithTabBox data={data}/>
        </div>
    )
}

export default JoinContainerFive