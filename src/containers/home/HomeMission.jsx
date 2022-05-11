import React from 'react'
import MissionCard from '../../components/missioncard';

const HomeMission = (props) => {
    const sectionData = props.data.elements[0];
    const missionCards = sectionData.cards;
    return (
        <div className='section-with-padding home-mission-section'>
            <div className="container">
                <div className="our-mission-container">
                    <div
                        className="title"
                        data-aos='fade-up'
                        data-aos-duration='600'
                        data-aos-delay='300'
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: sectionData.title
                            }}
                        />
                    </div>
                    <div
                        className="subtitle"
                        data-aos='fade-up'
                        data-aos-duration='600'
                        data-aos-delay='600'
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: sectionData.subtitle
                            }}
                        />
                    </div>
                    <div
                        className="divider"
                        data-aos='fade-up'
                        data-aos-duration='600'
                        data-aos-delay='900'
                    />
                    <div
                        className="content"
                        data-aos='fade-up'
                        data-aos-duration='600'
                        data-aos-delay='1200'
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: sectionData.content
                            }}
                        />
                    </div>
                    <div className="mission-cards-part">
                        {
                            missionCards.map((eachCardData, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <MissionCard cardData={eachCardData} cardKey={key} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMission