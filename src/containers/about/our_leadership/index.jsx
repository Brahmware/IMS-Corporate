import React from 'react'
import LeadershipAboutUs from './LeadershipAboutUs'
import LeadershipMission from './LeadershipMission'
import LeadershipSlider from './LeadershipSlider'
import LeadershipWhatWeDo from './LeadershipWhatWeDo';
import Data from "../../../data/business.json"
import LeadershipImmersiveLearning from './LeadershipImmersiveLearning';

const OurLeadership = () => {
    const LeadershipData=Data.our_leadership
  return (
      <>
          <LeadershipWhatWeDo data={LeadershipData[0]}/>
          <LeadershipMission data={LeadershipData[1]}/>
          <LeadershipImmersiveLearning data={LeadershipData[2]}/>
          <LeadershipAboutUs data={LeadershipData[3]}/>
          <LeadershipSlider/>
    </>
  )
}

export default OurLeadership