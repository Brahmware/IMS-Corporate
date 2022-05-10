import React from 'react'
import Footer from '../../containers/footer';
import Header from '../../containers/header';
import HomeAbout from '../../containers/home/HomeAbout';
import HomeBanner from '../../containers/home/HomeBanner';
import HomeExplorers from '../../containers/home/HomeExplorers';
import HomeImmersiveLearning from '../../containers/home/HomeImmersiveLearning';
import HomeMission from '../../containers/home/HomeMission';
import HomeNetworks from '../../containers/home/HomeNetworks';
import HomeOurSymbol from '../../containers/home/HomeOurSymbol';
import HomeTestimonial from '../../containers/home/HomeTestimonial';
import Data from "../../data/home-data.json";


const HomePage = () => {
  const homeData = Data.homeData;
  
  return (
    <div className="page-wrapper">
      <Header />
      <HomeBanner data={homeData[0]} />
      <HomeAbout data={homeData[1]} />
      <HomeMission data={homeData[2]} />
      <HomeImmersiveLearning data={homeData[3]} />
      <HomeTestimonial data={homeData[4]}/>
      <HomeExplorers data={homeData[5]} />
      <HomeOurSymbol data={homeData[6]} />
      <HomeNetworks data={homeData[7]} />
      <Footer />
    </div>
  )
}

export default HomePage;