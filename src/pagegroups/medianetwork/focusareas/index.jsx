import React from 'react'
import FocusAreasContainerOne from "../../../containers/focus-areas/container-1"
import FocusAreasContainerTwo from '../../../containers/focus-areas/container-2';
import FocusAreasContainerThree from '../../../containers/focus-areas/container-3';
import FocusAreasContainerFour from '../../../containers/focus-areas/container-4';
import FocusAreasContainerFive from "../../../containers/focus-areas/container-5"
import FocusAreasContainerSix from '../../../containers/focus-areas/container-6';
import FocusAreasContainerSeven from "../../../containers/focus-areas/container-7"
import FocusAreasContainerEight from '../../../containers/focus-areas/container-8';
import FocusAreasContainerNine from "../../../containers/focus-areas/container-9"
import FocusAreasContainerTen from '../../../containers/focus-areas/container-10';
import FocusAreasContainerEleven from '../../../containers/focus-areas/container-11';

const FocusAreas = ({ data }) => {

    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
    const dataContainer7 = data && data.find(data => data.id === 'container_7').elements;
    const dataContainer9 = data && data.find(data => data.id === 'container_9').elements;
    const dataContainer11 = data && data.find(data => data.id === 'container_11').elements;
    return (
        <div className="focus-areas-page">
            <FocusAreasContainerOne data={dataContainer1} />
            <FocusAreasContainerTwo />
            <FocusAreasContainerThree data={dataContainer3} />
            <FocusAreasContainerFour />
            <FocusAreasContainerFive data={dataContainer5} />
            <FocusAreasContainerSix />
            <FocusAreasContainerSeven data={dataContainer7} />
            <FocusAreasContainerEight />
            <FocusAreasContainerNine data={dataContainer9} />
            <FocusAreasContainerTen />
            <FocusAreasContainerEleven data={dataContainer11} />
        </div>
    )
}

export default FocusAreas