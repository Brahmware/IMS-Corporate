import React from 'react'
import AboutUsContainerOne from '../../../containers/aboutus/container-1'
import AboutUsContainerTwo from '../../../containers/aboutus/container-2';
import AboutUsContainerThree from '../../../containers/aboutus/container-3';
import AboutUsContainerFour from '../../../containers/aboutus/container-4';
import AboutUsContainerFive from '../../../containers/aboutus/container-5';
import AboutUsContainerSix from '../../../containers/aboutus/container-6';

const AboutUs = ( { data } ) => {

  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
  const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
  const dataContainer6 = data && data.find(data => data.id === 'container_6').elements;

  return (
    <div className='about-us-page'>
      <AboutUsContainerOne data={dataContainer1} />
      <AboutUsContainerTwo data={dataContainer2} />
      <AboutUsContainerThree data={dataContainer3} />
      <AboutUsContainerFour data={dataContainer4} />
      <AboutUsContainerFive data={dataContainer5} />
      <AboutUsContainerSix data={dataContainer6} /> 
    </div>
  )
}

export default AboutUs