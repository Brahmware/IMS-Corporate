import React from 'react'
import SustainabilityStatementContainerOne from '../../../containers/sustainability-statement/container-1'
import SustainabilityStatementContainerTwo from '../../../containers/sustainability-statement/container-2'
import SustainabilityStatementContainerThree from '../../../containers/sustainability-statement/container-3'
import SustainabilityStatementContainerFour from '../../../containers/sustainability-statement/container-4'

const SustainabilityStatement = ({ data }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    return (
        <div className="sustainability-statement-page">
            <SustainabilityStatementContainerOne data={dataContainer1} />
            <SustainabilityStatementContainerTwo data={dataContainer2} />
            <SustainabilityStatementContainerThree data={dataContainer3} />
            <SustainabilityStatementContainerFour data={dataContainer4} />
        </div>
    )
}

export default SustainabilityStatement