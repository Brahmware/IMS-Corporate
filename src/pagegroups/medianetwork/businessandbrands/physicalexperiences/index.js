import React from 'react'
import PhysicalExperiencesContainerOne from '../../../../containers/physical-experiences/container-1'
import PhysicalExperiencesContainerTwo from '../../../../containers/physical-experiences/container-2'
import PhysicalExperiencesContainerThree from '../../../../containers/physical-experiences/container-3'
import PhysicalExperiencesContainerFour from '../../../../containers/physical-experiences/container-4'
import PhysicalExperiencesContainerFive from '../../../../containers/physical-experiences/container-5'


const PhysicalExperiences = ({ data }) => {

    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements

    return (
        <div className='physicalexperiences-page'>
            <PhysicalExperiencesContainerOne data={dataContainer1} />
            <PhysicalExperiencesContainerTwo data={dataContainer2} />
            <PhysicalExperiencesContainerThree data={dataContainer3} />
            <PhysicalExperiencesContainerFour data={dataContainer4} />
            <PhysicalExperiencesContainerFive data={dataContainer5} />
        </div>
    )
}

export default PhysicalExperiences