import React from 'react'
import SectionWithImage from '../../common/sectionwithimage'

const LeadershipImmersiveLearning = (props) => {
  return (
    <div className='section home-immersive-learning-section'>
      <SectionWithImage containerData={props.data} inverse={true} />

    </div>
  )
}

export default LeadershipImmersiveLearning