import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const StackedFluidCardsContainer = ({ url, cards, activeCard, handleOnClick }) => {

    const tvNetwork = cards && cards.find(data => data.id === 'tv_network').elements;
    const magazines = cards && cards.find(data => data.id === 'magazines').elements;
    const studioOperations = cards && cards.find(data => data.id === 'studio_operations').elements;
    const motionPictures = cards && cards.find(data => data.id === 'motion_pictures').elements;

    // console.log(cards)

    const [hoveredTab, setHoveredTab] = useState(null);

    const handleMouseEnter = (event) => {
        setHoveredTab(event.currentTarget.id)
    }
    const handleMouseLeave = (event) => {
        setHoveredTab(null)
    }
    const handleClick = (event) => {

        /* history.push(`${url}/${event.currentTarget.id}`); */
        let cardsContainer = document.getElementById('stacked-fluid-cards-container');
        let prevActiveEl = document.getElementsByClassName('active-card')[0];

        cardsContainer.classList.remove('justify-between');
        prevActiveEl.classList.remove('breathing');

        let activeElement = event.currentTarget;
        setTimeout(() => {
            handleOnClick(activeElement)
        }, 0)

        setTimeout(() => {
            cardsContainer.classList.add('justify-between');
            activeElement.classList.add('breathing');
        }, 600)
    }

    /* In the Begining */
    useEffect(() => {
        let cardsContainer = document.getElementById('stacked-fluid-cards-container');
        let prevActiveEl = document.getElementsByClassName('active-card')[0];

        cardsContainer.classList.add('justify-between');
        prevActiveEl.classList.add('breathing');
    }, [])

    return (
        <div className="white-background">
            <div className="container">
                <div
                    className='stacked-fluid-cards-container noselect'
                    id='stacked-fluid-cards-container'
                >
                    {
                        cards && cards.map((card, cardKey) => {
                            return (
                                <NavLink
                                    className={`stacked-card ${card.id === activeCard && 'active-card'} ${card.id === hoveredTab & hoveredTab !== activeCard && 'hovered-tab'}`}
                                    key={cardKey}
                                    id={card.id}
                                    onClick={handleClick}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    to={`${url}/${card.id}`}
                                >
                                    <div className="card-content">
                                        <div className="background-image">
                                            <div className="overlay" />
                                            <div className="background-image-wrapper">
                                                <img src={card.cover} alt={card.id} />
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}
export default StackedFluidCardsContainer