import React from 'react'
import ProfessionalLearningContainerOne from '../../../../containers/professional-learning/container-1'
import ProfessionalLearningContainerTwo from '../../../../containers/professional-learning/container-2'
import ProfessionalLearningContainerThree from '../../../../containers/professional-learning/container-3'
import ProfessionalLearningContainerFour from '../../../../containers/professional-learning/container-4'
import ProfessionalLearningContainerFive from '../../../../containers/professional-learning/container-5'


const ProfessionalLearningContainers = ({ data,url }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;

    return (
        <div className='resources-page'>

            <ProfessionalLearningContainerOne data={dataContainer1} />
            <ProfessionalLearningContainerTwo data={dataContainer2} />
            <ProfessionalLearningContainerThree data={dataContainer3} url={ url}/>
            <ProfessionalLearningContainerFour data={dataContainer4} />
            <ProfessionalLearningContainerFive data={dataContainer5} />
        </div>
    )
}

export default ProfessionalLearningContainers