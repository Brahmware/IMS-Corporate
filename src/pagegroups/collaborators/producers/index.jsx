import React from 'react'
import ProducersContainerOne from '../../../containers/producers/container-1';
import ProducersContainerTwo from '../../../containers/producers/container-2';
import ProducersContainerThree from '../../../containers/producers/container-3';
import ProducersContainerFour from '../../../containers/producers/container-4';
import ProducersContainerFive from '../../../containers/producers/container-5';


const Producers = ({ data }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
    return (
        <div className='immersive-experience-page'>
            <ProducersContainerOne data={dataContainer1} />
            <ProducersContainerTwo data={dataContainer2} />
            <ProducersContainerThree data={dataContainer3} />
            <ProducersContainerFour data={dataContainer4} />
            <ProducersContainerFive data={dataContainer5} />
        </div>
    )
}

export default Producers