import React from 'react'
import ImmersiveExperienceContainerOne from '../../../containers/immersive-experience/container-1';
import ImmersiveExperienceContainerTwo from '../../../containers/immersive-experience/container-2';
import ImmersiveExperienceContainerThree from '../../../containers/immersive-experience/container-3';
import ImmersiveExperienceContainerFour from '../../../containers/immersive-experience/container-4';


const ImmersiveExperience = ({data}) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;

  return (
    <div className='immersive-experience-page'>
      <ImmersiveExperienceContainerOne data={dataContainer1}/>
      <ImmersiveExperienceContainerTwo data={dataContainer2}/>
      <ImmersiveExperienceContainerThree data={dataContainer3}/>
      <ImmersiveExperienceContainerFour data={dataContainer4}/>
    </div>
  )
}

export default ImmersiveExperience