import React from 'react'
import Footer from '../../containers/footer';
import Header from '../../containers/header';

import './home.scss';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="home-slider"></div>
      <div className="about-us-1"></div>
      <div className='container'>HomePage</div>
      <div className="our-mission"></div>
      <div className="about-us-2"></div>
      <div className="comments"></div>
      <div className="explorers"></div>
      <div className="home-pricing"></div>
      <div className="our-network"></div>
      <Footer />
    </React.Fragment>
  )
}

export default HomePage;