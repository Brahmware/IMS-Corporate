import React from 'react'
import Footer from '../../containers/footer';
import Header from '../../containers/header';
import HomeAbout from '../../containers/home/HomeAbout';
import HomeBanner from '../../containers/home/HomeBanner';
import HomeMission from '../../containers/home/HomeMission';
import Data from "../../data/home-data.json";


const HomePage = () => {
  const homeData = Data.homeData;
  
  return (
    <div className="page-wrapper">
      <Header />
      <HomeBanner data={homeData[0]} />
      <HomeAbout data={homeData[1]} />
      <HomeMission data={homeData[2]} />
      <Footer />
    </div>
  )
}

export default HomePage;