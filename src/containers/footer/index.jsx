import React from 'react'
import { IMSLogo } from '../../assets/ourlogo';
import CopyrightComponent from '../../components/copyright';
import SiteMap from '../../components/sitemap';
import SocialLinks from '../../components/sociallinks';
import SubscribeComponent from '../../components/subscribecomponent';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="divider">
          <div className="divider-line" />
        </div>
        <div className="page-wrapper">
          <div className="sitemap-section row">
            <div
              className="ims-logo-part col-6"
              data-aos='fade-right'
              data-aos-duration='600'
              data-aos-delay='300'
            >
              <IMSLogo />
            </div>
            <div 
              className="sitemap-part col-6"
              data-aos='fade-right'
              data-aos-duration='600'
              data-aos-delay='600'
            >
              <SiteMap />
            </div>
          </div>
          <div 
            className="subscribe-section row"
            data-aos='fade-left'
              data-aos-duration='600'
              data-aos-delay='900'
            >
            <div className="col-6" />
            <div className="col-6">
              <SubscribeComponent />
            </div>
          </div>
          <div 
            className="privacy-copyright-section row"
            data-aos='fade-up'
              data-aos-duration='600'
              data-aos-delay='1200'
          >
            <div className="privacy-copyright-section-left col-6">
              <span className="contactus">CONTACT US</span>
              <div className="socials"><SocialLinks /></div>
              <div className="copyright"><CopyrightComponent /></div>
            </div>
            <div className="privacy-copyright-section-right col-6">
              <div className="legals">
                <a href="/visitor_agreement">Visitor Agreement</a>
                <a href="/visitor_agreement">Privacy Notice</a>
                <a href="/website_accessibility_statement">Website Accessibility Statement</a>
                <a href="/code_of_ethics">Code of Ethics</a>
                <a href="/faq">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;