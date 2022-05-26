import React from 'react'
import BecomeAMemberOne from '../../../containers/become-a-member/container-1';
import BecomeAMemberTwo from '../../../containers/become-a-member/container-2';
import BecomeAMemberThree from '../../../containers/become-a-member/container-3';
import BecomeAMemberFour from '../../../containers/become-a-member/container-4';
import BecomeAMemberFive from '../../../containers/become-a-member/container-5';


const BecomeAMember = ({ data }) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
  const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
  // const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
  return (
    <div className="corporate-and-foundations-page">
      <BecomeAMemberOne data={dataContainer1}/>
      <BecomeAMemberTwo data={dataContainer2}/>
      <BecomeAMemberThree data={dataContainer3}/>
      <BecomeAMemberFour data={dataContainer4}/>
      <BecomeAMemberFive data={dataContainer5}/>
    </div>
  )
}

export default BecomeAMember