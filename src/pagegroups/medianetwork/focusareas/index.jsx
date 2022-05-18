import React from 'react'
import FocusAreasOne from "../../../containers/focus-areas/container-1"
import FocusAreasTwo from '../../../containers/focus-areas/container-2';
import FocusAreasThree from '../../../containers/focus-areas/container-3';
import FocusAreasFour from '../../../containers/focus-areas/container-4';

const FocusAreas = ({data}) => {
  
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
  return (
    <div className="focus-areas-page">
      <FocusAreasOne data={dataContainer1}/>
      <FocusAreasTwo data={dataContainer2}/>
      <FocusAreasThree data={dataContainer3}/>
      <FocusAreasFour data={dataContainer4}/>
   </div>
  )
}

export default FocusAreas