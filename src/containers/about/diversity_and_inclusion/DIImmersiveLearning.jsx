import React from 'react'
import SectionWithImage from '../../common/sectionwithimage'

const DIImmersiveLearning = (props) => {
  return (
    <div className='section home-immersive-learning-section'>
      <SectionWithImage containerData={props.data} inverse={true} />
    </div>
  )
}

export default DIImmersiveLearning