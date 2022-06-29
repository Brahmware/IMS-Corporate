import React, { useState } from 'react'
// import TvNetwork from '../../business-and-brands/tv-network';
// import Magazines from "../../business-and-brands/magazines"
// import StudioOperations from '../../business-and-brands/studio-operations';
// import MotionPictures from '../../business-and-brands/motion-pictures';
const StackedFluidCardsContainer = ({ cards, activeCard, handleOnClick }) => {

    const tvNetwork = cards && cards.find(data => data.id === 'tv_network').elements;
    const magazines = cards && cards.find(data => data.id === 'magazines').elements;
    const studioOperations = cards && cards.find(data => data.id === 'studio_operations').elements;
    const motionPictures = cards && cards.find(data => data.id === 'motion_pictures').elements;

    // console.log(cards)

    const [hoveredTab, setHoveredTab] = useState(null);
    const [activeElement, setActiveElement] = useState("tv_network");

    const handleMouseEnter = (event) => {
        setHoveredTab(event.currentTarget.id)
    }
    const handleMouseLeave = (event) => {
        setHoveredTab(null)
    }
    const handleClick = (event) => {
        let cardsContainer = document.getElementById('stacked-fluid-cards-container');
        let prevActiveEl = document.getElementsByClassName('active-card')[0];

        cardsContainer.classList.remove('justify-between');
        prevActiveEl.classList.remove('breathing');

        let activeElement = event.currentTarget;
        setActiveElement(activeElement.id)
        setTimeout(() => {
            handleOnClick(activeElement)
        }, 0)

        setTimeout(() => {
            cardsContainer.classList.add('justify-between');
            activeElement.classList.add('breathing');
        }, 600)
    }
    return (
        <>
            <div className="white-background">
                <div className="container">
                    <div
                        className='stacked-fluid-cards-container noselect'
                        id='stacked-fluid-cards-container'
                    >
                        {
                            cards && cards.map((card, cardKey) => {
                                return (
                                    <div
                                        className={`stacked-card ${card.id === activeCard && 'active-card'} ${card.id === hoveredTab & hoveredTab !== activeCard && 'hovered-tab'}`}
                                        key={cardKey}
                                        id={card.id}
                                        onClick={handleClick}
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
            {/* {
                activeElement === "tv_network" ? <TvNetwork data={tvNetwork} /> :
                    activeElement === "magazines" ? <Magazines data={magazines} /> :
                        activeElement === "studio_operations" ? <StudioOperations data={studioOperations} /> :
                            activeElement === "motion_pictures" ? <MotionPictures data={motionPictures} /> :
                                activeElement
            } */}
        </>
    )
}

export default StackedFluidCardsContainer