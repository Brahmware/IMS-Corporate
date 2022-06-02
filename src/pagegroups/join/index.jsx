import React from 'react'
import Footer from '../../containers/footer'
import Header from '../../containers/header';
import data from "../../data/join.json";
import JoinContainerOne from "./container-1"
import JoinContainerTwo from './container-2';
import JoinContainerThree from './container-3';
import JoinContainerFour from './container-4';
import JoinContainerFive from './container-5';

const Join = () => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
    return (
        <>
            <Header />
            <JoinContainerOne data={dataContainer1} />
            <JoinContainerTwo data={dataContainer2} />
            <JoinContainerThree data={dataContainer3} />
            <JoinContainerFour data={dataContainer4} />
            <JoinContainerFive data={dataContainer5} />











            <Footer />
        </>
    )
}

export default Join