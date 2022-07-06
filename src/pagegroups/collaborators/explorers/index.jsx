import React from 'react'
import ExplorersContainerOne from '../../../containers/explorers/container-1';
import ExplorersContainerTwo from '../../../containers/explorers/container-2';
import ExplorersContainerThree from '../../../containers/explorers/container-3';
import ExplorersContainerFour from '../../../containers/explorers/container-4';
import ExplorersContainerFive from '../../../containers/explorers/container-5';


const Explorers = ({ data }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
    // console.log(dataContainer1)

    return (
        <div className='explorers-experience-page'>
            <ExplorersContainerOne data={dataContainer1} />
            <ExplorersContainerTwo data={dataContainer2} />
            <ExplorersContainerThree />
            <ExplorersContainerFour data={dataContainer4} />
            <ExplorersContainerFive data={dataContainer5} />
        </div>
    )
}

export default Explorers