import React from 'react'
import FloatinEarthButton from '../../components/floating-button';
import SEO from '../../components/SEO';
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
    <React.Fragment>
      <SEO title='Indian Media Syndicate' />
      <div className="page-wrapper home-page-wrapper">
        <Header />
        <HomeBanner data={homeData[0]} />
        <HomeAbout data={homeData[1]} />
        <HomeMission data={homeData[2]} />
        <HomeImmersiveLearning data={homeData[3]} />
        <HomeTestimonial />
        <HomeExplorers data={homeData[4]} />
        <HomeOurSymbol data={homeData[5]} />
        <HomeNetworks data={homeData[6]} />
        <FloatinEarthButton />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default HomePage;