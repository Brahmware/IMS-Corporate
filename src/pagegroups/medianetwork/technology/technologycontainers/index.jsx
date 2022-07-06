import React from 'react'
import TechnologyContainerOne from '../../../../containers/technology/container-1'
import TechnologyContainerTwo from '../../../../containers/technology/container-2'
import TechnologyContainerThree from '../../../../containers/technology/container-3'
import TechnologyContainerFour from '../../../../containers/technology/container-4'
import TechnologyContainerFive from '../../../../containers/technology/container-5'
import TechnologyContainerSix from '../../../../containers/technology/container-6'
import TechnologyContainerSeven from '../../../../containers/technology/container-7'

const TechnologyContainers = ({ data,url }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
    const dataContainer6 = data && data.find(data => data.id === 'container_6').elements;
    const dataContainer7 = data && data.find(data => data.id === 'container_7').elements;
    return (
        <>
            <TechnologyContainerOne data={dataContainer1} />
            <TechnologyContainerTwo data={dataContainer2} />
            <TechnologyContainerThree data={dataContainer3} />
            <TechnologyContainerFour data={dataContainer4} url={ url} />
            <TechnologyContainerFive data={dataContainer5}/>
            <TechnologyContainerSix data={dataContainer6} />
            <TechnologyContainerSeven data={dataContainer7} />
        </>
    )
}

export default TechnologyContainers