import React from 'react'
import ImageWithBorderRadius from '../../common/imagewithborderradius'

const AboutWhatWeDo = (props) => {
  return (
    <div className='section home-about-section white-background'>
      <ImageWithBorderRadius containerData={props.data} />
    </div>
  )
}

export default AboutWhatWeDo