import React from 'react'
import SustainabilityStatementOne from '../../../containers/sustainability-statement/container-1'
import SustainabilityStatementTwo from '../../../containers/sustainability-statement/container-2'
import SustainabilityStatementThree from '../../../containers/sustainability-statement/container-3'
import SustainabilityStatementFour from '../../../containers/sustainability-statement/container-4'

const SustainabilityStatement = ({data}) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
  return (
    <div className="investors-page">
      <SustainabilityStatementOne data={dataContainer1}/>
      <SustainabilityStatementTwo data={dataContainer2}/>
      <SustainabilityStatementThree data={dataContainer3}/>
      <SustainabilityStatementFour data={dataContainer4}/>
    </div>
  )
}

export default SustainabilityStatement