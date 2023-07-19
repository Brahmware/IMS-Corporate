import React from 'react'
import FloatingEarthButton from '../../components/floating-button';
import SEO from '../../components/SEO';
import Footer from '../../containers/footer';
import Header from '../../containers/header';
import HomeContainerOne from '../../containers/home/container-1';
import HomeContainerTwo from '../../containers/home/container-2';
import HomeContainerThree from '../../containers/home/container-3';
import HomeContainerFour from '../../containers/home/container-4';
import HomeContainerFive from '../../containers/home/container-5';
import HomeContainerSix from '../../containers/home/container-6';
import HomeContainerSeven from '../../containers/home/container-7';
import HomeContainerEight from '../../containers/home/container-8';
import HomeContainerNine from '../../containers/home/container-9';
import HomeContainerTen from '../../containers/home/container-10';
import data from "../../data/home-data.json";
import HomeContainerEleven from '../../containers/home/container-11';


const HomePage = () => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
  const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
  const dataContainer6 = data && data.find(data => data.id === 'container_6').elements;
  const dataContainer8 = data && data.find(data => data.id === 'container_8').elements;
  const dataContainer9 = data && data.find(data => data.id === 'container_9').elements;
  const dataContainer10 = data && data.find(data => data.id === 'container_10').elements;
  const dataContainer11 = data && data.find(data => data.id === 'container_11').elements;
  return (
    <React.Fragment>
      <SEO title='Indian Media Syndicate' />
      <div className="page-wrapper home-page-wrapper">
        <Header />
        <FloatingEarthButton />
        <HomeContainerOne data={dataContainer1} />
        <HomeContainerTwo data={dataContainer2} />
        <HomeContainerThree data={dataContainer3} />
        <HomeContainerFour data={dataContainer4} />
        <HomeContainerFive data={dataContainer5} />
        <HomeContainerSix data={dataContainer6} />
        {/* <HomeContainerSeven /> */}
        <HomeContainerTen data={dataContainer10} />
        <HomeContainerEight data={dataContainer8} />
        <HomeContainerNine data={dataContainer9} />
        <HomeContainerEleven data={dataContainer11} />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default HomePage;