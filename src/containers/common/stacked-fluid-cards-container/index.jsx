import React, { useState } from 'react'

const StackedFluidCardsContainer = ({ cards, activeCard, handleOnClick }) => {

    const [hoveredTab, setHoveredTab] = useState(null);
    
    const handleMouseEnter = (event) => {
        setHoveredTab(event.currentTarget.id)
    }
    const handleMouseLeave = (event) => {
            setHoveredTab(null)
    }

    return (
        <div className="white-background">
            <div className="container">
                <div className='stacked-fluid-cards-container noselect'>
                    {
                        cards && cards.map((card, cardKey) => {
                            return (
                                <div 
                                    className={`stacked-card ${card.id === activeCard && 'active-card'} ${card.id === hoveredTab & hoveredTab !== activeCard && 'hovered-tab'}`}
                                    key={cardKey}
                                    id={card.id}
                                    onClick = {handleOnClick}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="card-content">
                                        <div className="background-image">
                                            <div className="overlay" />
                                            <div className="background-image-wrapper">
                                                <img src={card.cover} alt={card.id} />
                                            </div>
                                        </div>
                                        <div className="card-name">
                                            {card.name}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default StackedFluidCardsContainer