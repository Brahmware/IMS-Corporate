import React from 'react'
import ImageWithBorderRadius from "../../common/imagewithborderradius"

const AboutAboutUs = (props) => {
  return (
    <div className='section home-about-section white-background'>
      <ImageWithBorderRadius containerData={props.data} inverse={true}/>
    </div>
  )
}

export default AboutAboutUs