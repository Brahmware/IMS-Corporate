import React from 'react'
import MissionCard from '../../components/missioncard';

const HomeMission = (props) => {
    const sectionData = props.data.elements[0];
    const missionCards = sectionData.cards;
    return (
        <div className='section-with-padding home-mission-section'>
            <div className="container">
                <div className="our-mission-container">
                    <div className="title">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: sectionData.title
                            }}
                        />
                    </div>
                    <div className="subtitle">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: sectionData.subtitle
                            }}
                        />
                    </div>
                    <div className="divider" />
                    <div className="content">
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
                                        <MissionCard cardData={eachCardData} />
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