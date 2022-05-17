import React from 'react'
import CenterAlignedCard from '../../../components/center-aligned-card'

const CenterAlignedCardContainer = (props) => {
    const carddata = props.data.card;
    return (
        <div className="container">
            <div className="center-aligned-card-container">
                <CenterAlignedCard
                    title = {carddata.title}
                    subtitle = {carddata.subtitle}
                    content = {carddata.content}
                    dividercolor = {props.dividercolor}
                />
            </div>
        </div>
    )
}

export default CenterAlignedCardContainer