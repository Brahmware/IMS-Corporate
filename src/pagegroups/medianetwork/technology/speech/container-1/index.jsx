import React from 'react'
import ContentContainer from "../../../../../containers/common/contentcontainer"

const SpeechContainerOne = ({ card }) => {
    return (
        <div className=" white-background">
            <div className="container">
                <ContentContainer card={card[0]} />
            </div>
        </div>
    )
}

export default SpeechContainerOne