import React from 'react'
import AboutUsContainerOne from '../../../containers/aboutus/container-1'
import AboutUsContainerTwo from '../../../containers/aboutus/container-2';
import AboutUsContainerThree from '../../../containers/aboutus/container-3';
import AboutUsContainerFour from '../../../containers/aboutus/container-4';
import ImageCardContainer from '../../../containers/common/image-card-container'

const AboutUs = ( { data } ) => {

  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;

  return (
    <div className='about-us-page'>
      <AboutUsContainerOne data={dataContainer1} />
      <AboutUsContainerTwo data={dataContainer2} />
      <AboutUsContainerThree data={dataContainer3} />
      <AboutUsContainerFour data={dataContainer4} />
    </div>
  )
}

export default AboutUs