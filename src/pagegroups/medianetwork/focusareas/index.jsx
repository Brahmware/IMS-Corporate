import React from 'react'
import FocusAreasContainerOne from "../../../containers/focus-areas/container-1"
import FocusAreasContainerTwo from '../../../containers/focus-areas/container-2';
import FocusAreasContainerThree from '../../../containers/focus-areas/container-3';
import FocusAreasContainerFour from '../../../containers/focus-areas/container-4';

const FocusAreas = ({data}) => {
  
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
  return (
    <div className="focus-areas-page">
      <FocusAreasContainerOne data={dataContainer1}/>
      <FocusAreasContainerTwo data={dataContainer2}/>
      <FocusAreasContainerThree data={dataContainer3}/>
      <FocusAreasContainerFour data={dataContainer4}/>
   </div>
  )
}

export default FocusAreas