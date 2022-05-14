import React from 'react'
import CenterAlignedCard from '../../components/center-aligned-card';
import FunfactColumnSpreadContainer from '../common/funfact-spread-columns-container';

const HomeMission = (props) => {
    const sectionData = props.data.elements[0];
    const missionCards = sectionData.cards;
    return (
        <div className='section-with-padding home-mission-section'>
            <div className="container">
                <div className="our-mission-container">
                    <CenterAlignedCard 
                        title={sectionData.title} 
                        subtitle={sectionData.subtitle}
                        content={sectionData.content}
                    />
                    <div className="mission-cards-part">
                        {/* {
                            missionCards.map((eachCardData, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <MissionCard cardData={eachCardData} cardKey={key} />
                                    </React.Fragment>
                                )
                            })
                        } */}
                        <FunfactColumnSpreadContainer
                            columnsdata = {missionCards}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMission