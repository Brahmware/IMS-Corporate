import React from 'react'
import Footer from '../../containers/footer'
import Header from '../../containers/header';
import data from "../../data/join.json";
import FloatingEarthButton from '../../components/floating-button';
import JoinContainerOne from "../../containers/join/container-1"
import JoinContainerTwo from '../../containers/join/container-2';
import JoinContainerThree from '../../containers/join/container-3';
import JoinContainerFour from '../../containers/join/container-4';
import JoinContainerFive from '../../containers/join/container-5';
import SEO from "../../components/SEO"
import JoinContainerSix from '../../containers/join/container-6';
import JoinContainerSeven from '../../containers/join/container-7';
import JoinContainerEight from '../../containers/join/container-8';

const Join = () => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
    const dataContainer6 = data && data.find(data => data.id === 'container_6').elements;
    const dataContainer7 = data && data.find(data => data.id === 'container_7').elements;
    const dataContainer8 = data && data.find(data => data.id === 'container_8').elements;
    return (
        <>
            <SEO title='Join IMS' />
            <div className="page-wrapper join-page-wrapper">
                <Header />
                <JoinContainerOne data={dataContainer1} />
                <JoinContainerTwo data={dataContainer2} />
                <JoinContainerThree data={dataContainer3} />
                <JoinContainerFour data={dataContainer4} />
                <JoinContainerFive data={dataContainer5} />
                <JoinContainerSix data={dataContainer6} />
                <JoinContainerSeven data={dataContainer7} />
                <JoinContainerEight data={dataContainer8} />
                <FloatingEarthButton />
                <Footer />
            </div>

        </>
    )
}

export default Join