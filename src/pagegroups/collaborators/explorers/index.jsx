import React from 'react'
import ExplorersContainerOne from '../../../containers/explorers/container-1';
import ExplorersContainerTwo from '../../../containers/explorers/container-2';
import ExplorersContainerThree from '../../../containers/explorers/container-3';


const Explorers = ({data}) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;

  return (
    <div className='explorers-experience-page'>
      <ExplorersContainerOne data={dataContainer1}/>
      <ExplorersContainerTwo data={dataContainer2}/> 
      <ExplorersContainerThree data={dataContainer3}/>
    </div>
  )
}

export default Explorers