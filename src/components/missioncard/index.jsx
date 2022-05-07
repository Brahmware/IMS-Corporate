import React from 'react'
import HollowButton from '../buttons/HollowButton'

const MissionCard = ({ cardData }) => {
    console.log(cardData)
    return (
        <div className='mission-card'>
            <div className="count">
                <span>{cardData.count}</span>
            </div>
            <div className="card-divider"/>
            <div className="card-title">
                <span>{cardData.cardtitle}</span>
            </div>
            <div className="card-content">
                <span>{cardData.cardcontent}</span>
            </div>
            <div className="card-button">
                <HollowButton class={"gray-button"} text={"DISCOVER"} />
            </div>
        </div>
    )
}

export default MissionCard