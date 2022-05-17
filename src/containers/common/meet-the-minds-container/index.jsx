import React, { useEffect, useRef, useState } from 'react'
import TeamsData from '../../../data/teams.json'
import CardsCarouselContainer from '../cards-carousel';

const MeetTheMindsContainer = () => {
    const tabsRef = useRef({});
    const [activeTab, setActiveTab] = useState("board_of_leaders");

    const handleTabClick = (event) => {
        event.preventDefault();
        setActiveTab(event.target.id);
    }

    const relatedData = TeamsData.filter(data => data.teamid === activeTab)[0].members;

    return (
        <div className='meet-the-minds-container noselect'>
            <div className="container">
                <div
                    className="title"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <span>MEET THE MINDS</span>
                </div>
            </div>
            <div
                className="container tabs-container"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='600'
            >
                <div className="tabs-section">
                    {
                        TeamsData.map((team, key) => {
                            return (
                                <div
                                    key={key}
                                    className="each-tab"
                                    id={team.teamid}
                                    onClick={handleTabClick}
                                    ref={element => tabsRef.current[team.teamid] = element}
                                >
                                    <div className="tab-name subtitle">
                                        <span>{team.teamname}</span>
                                    </div>
                                    <div className="marker-holder">
                                        <div className={team.teamid === activeTab ? 'marker active' : 'marker'} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="divider tabs-divider" />
            </div>
            <div className="cards-carousel-container">
                <CardsCarouselContainer data={relatedData} />
            </div>
            <div 
                className="divider bottom-divider"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='900'
            />
        </div>
    )
}

export default MeetTheMindsContainer