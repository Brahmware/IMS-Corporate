import React from 'react'
import ResourcesContainerOne from '../../../containers/resources/container-1';
import ResourcesContainerTwo from '../../../containers/resources/container-2';
import ResourcesContainerThree from '../../../containers/resources/container-3';
import ResourcesContainerFour from '../../../containers/resources/container-4';

const Resources = ({data}) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;

  return (
    <div className='resources-page'>
      <ResourcesContainerOne data={dataContainer1}/>
      <ResourcesContainerTwo data={dataContainer2}/>
      <ResourcesContainerThree data={dataContainer3}/>
      <ResourcesContainerFour data={dataContainer4}/>
    </div>
  )
}

export default Resources