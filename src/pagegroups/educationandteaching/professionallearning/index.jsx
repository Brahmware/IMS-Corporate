import React from 'react'
import ProfessionalLearningOne from '../../../containers/professional-learning/container-1'
import ProfessionalLearningTwo from '../../../containers/professional-learning/container-2'
import ProfessionalLearningThree from '../../../containers/professional-learning/container-3'
import ProfessionalLearningFour from '../../../containers/professional-learning/container-4'


const Resources = ({ data }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;

    return (
        <div className='resources-page'>

            <ProfessionalLearningOne data={dataContainer1} />
            <ProfessionalLearningTwo data={dataContainer2} />
            <ProfessionalLearningThree data={dataContainer3} />
            <ProfessionalLearningFour data={dataContainer4} />
        </div>
    )
}

export default Resources