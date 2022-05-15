import React from 'react'
import OurLeadershipContainerOne from '../../../containers/our-leadership/container-1';
import OurLeadershipContainerTwo from '../../../containers/our-leadership/container-2';
import OurLeadershipContainerThree from '../../../containers/our-leadership/container-3';
import OurLeadershipContainerFour from '../../../containers/our-leadership/container-4';

const OurLeadership = ({data}) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;

  return (
    <div className='our-leadership-page'>
      <OurLeadershipContainerOne data={dataContainer1} />
      <OurLeadershipContainerTwo data={dataContainer2} />
      <OurLeadershipContainerThree data={dataContainer3} />
      <OurLeadershipContainerFour />
    </div>
  )
}

export default OurLeadership