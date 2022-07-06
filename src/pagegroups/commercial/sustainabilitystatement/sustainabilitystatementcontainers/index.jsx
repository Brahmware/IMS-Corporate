import React from 'react'
import SustainabilityStatementContainerOne from '../../../../containers/sustainability-statement/container-1'
import SustainabilityStatementContainerTwo from '../../../../containers/sustainability-statement/container-2'
import SustainabilityStatementContainerThree from '../../../../containers/sustainability-statement/container-3'
import SustainabilityStatementContainerFour from '../../../../containers/sustainability-statement/container-4'
import SustainabilityStatementContainerFive from '../../../../containers/sustainability-statement/container-5'
import SustainabilityStatementContainerSix from '../../../../containers/sustainability-statement/container-6'

const SustainabilityStatementContainers = ({ data,url }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
    const dataContainer6 = data && data.find(data => data.id === 'container_6').elements;
    return (
        <div className="sustainability-statement-page">
            <SustainabilityStatementContainerOne data={dataContainer1} />
            <SustainabilityStatementContainerTwo data={dataContainer2} />
            <SustainabilityStatementContainerThree data={dataContainer3} />
            <SustainabilityStatementContainerFour data={dataContainer4} url={ url}/>
            <SustainabilityStatementContainerFive data={dataContainer5} />
            <SustainabilityStatementContainerSix data={dataContainer6} />
        </div>
    )
}

export default SustainabilityStatementContainers