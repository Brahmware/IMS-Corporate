import React from 'react'
import MissionCard from '../../../components/missioncard'

const ConservedSpecies = (props) => {
  
  const missionCards=props.data.elements[0].cards
  console.log(props.data.elements[0].cards)
  return (
    <div className='section-with-padding home-mission-section'>
            <div className="container">
                <div className="our-mission-container">
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

export default ConservedSpecies