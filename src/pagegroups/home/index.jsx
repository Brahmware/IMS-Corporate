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


const HomePage = () => {
<<<<<<< HEAD
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
  const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
  const dataContainer6 = data && data.find(data => data.id === 'container_6').elements;
  const dataContainer8 = data && data.find(data => data.id === 'container_8').elements;
  const dataContainer9 = data && data.find(data => data.id === 'container_9').elements;
  const dataContainer10 = data && data.find(data => data.id === 'container_10').elements;
  return (
    <React.Fragment>
      <SEO title='Indian Media Syndicate' />
      <div className="page-wrapper home-page-wrapper">
        <Header />
        <HomeContainerOne data={dataContainer1} />
        <HomeContainerTwo data={dataContainer2} />
        <HomeContainerThree data={dataContainer3} />
        <HomeContainerFour data={dataContainer4} />
        <HomeContainerFive data={dataContainer5} />
        <HomeContainerSix data={dataContainer6} />
        <HomeContainerSeven />
        <HomeContainerEight data={dataContainer8} />
        <HomeContainerNine data={dataContainer9} />
        <HomeContainerTen data={dataContainer10} />
        <FloatingEarthButton />
        <Footer />
      </div>
    </React.Fragment>
  )
=======
    const homeData = Data.homeData;
    return (
        <React.Fragment>
            <SEO title='Indian Media Syndicate' />
            <div className="page-wrapper home-page-wrapper">
                <Header />
                <HomeBanner data={homeData[0]} />
                <HomeAbout data={homeData[1]} />
                <HomeContainerOne data={homeData[2].elements} />
                <HomeContainerTwo data={homeData[3].elements} />
                <HomeContainerThree data={homeData[4].elements} />
                <HomeImmersiveLearning data={homeData[5]} />
                <HomeTestimonial />
                <HomeExplorers data={homeData[6]} />
                <HomeOurSymbol data={homeData[7]} />
                <HomeNetworks data={homeData[8]} />
                <FloatinEarthButton />
                <Footer />
            </div>
        </React.Fragment>
    )
>>>>>>> main
}

export default HomePage;