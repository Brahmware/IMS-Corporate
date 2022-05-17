import React from 'react'
import DiversityInclusionContainerOne from '../../../containers/diversity-and-inclusion/container-1';
import DiversityInclusionContainerTwo from '../../../containers/diversity-and-inclusion/container-2';
import DiversityInclusionContainerThree from '../../../containers/diversity-and-inclusion/container-3';
import DiversityInclusionContainerFour from '../../../containers/diversity-and-inclusion/container-4';


const DIversityAndInclusion = ({data}) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;

  return (
    <div className='diversity-and-inclusion-page'>
      <DiversityInclusionContainerOne data={dataContainer1} />
      <DiversityInclusionContainerTwo data={dataContainer2} />
      <DiversityInclusionContainerThree data={dataContainer3} />
      <DiversityInclusionContainerFour data={dataContainer4} />
    </div>
  )
}

export default DIversityAndInclusion