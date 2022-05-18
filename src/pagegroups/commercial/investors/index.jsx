import React from 'react'
import InvestorsOne from '../../../containers/investors/container-1'
import InvestorsTwo from '../../../containers/investors/container-2'
import InvestorsThree from '../../../containers/investors/container-3'
import InvestorsFour from '../../../containers/investors/container-4'

const Investors = ({data}) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
  return (
    <div className="investors-page">
      <InvestorsOne data={dataContainer1}/>
      <InvestorsTwo data={dataContainer2}/>
      <InvestorsThree data={dataContainer3}/>
      <InvestorsFour data={dataContainer4}/>
    </div>
  )
}

export default Investors