import React from 'react';
import { Link } from 'react-router-dom';
import CopyrightComponent from '../../components/copyright';
import LanguageComponent from '../../components/languagecomponent';
import OurSocialLinks from '../../components/our-social-links';
import SiteMap from '../../components/sitemap';
import PrivacyPolicySitemapData from '../../data/privacy-policy-sitemap.json';

const MegaMenu = (props) => {

    const pages = PrivacyPolicySitemapData && PrivacyPolicySitemapData[0].pages;
    const visitor_agreement = pages && pages.find(page => page.id === 'visitor_agreement');
    const privacy_notice = pages && pages.find(page => page.id === 'privacy_notice');


    return (
        <div
            className={props.show ? "megamenu open" : "megamenu"}
            style={{ paddingTop: `${props.headerHeight}px` }}
        >
            <div className="page-wrapper megamenu-page">
                <div className="site-map-wrapper">
                    <div className="container">
                        <div className="site-map-container">
                            <div className="megamenu-image" >
                                <img src="/images/nav-image.png" alt="navimage" />
                            </div>
                            <SiteMap onClickClose={props.onclose}/>
                        </div>
                    </div>
                </div>
                <div className="megamenu-footer container">
                    <div className="megamenu-footer-left">
                        <span className="contactus">CONTACT US</span>
                        <div className="socials"><OurSocialLinks /></div>
                        <div className="copyright"><CopyrightComponent /></div>
                    </div>
                    <div className="megamenu-footer-right">
                        <div />
                        <div className="language-preference">
                            <LanguageComponent />
                        </div>
                        <div className="legals">
                            <Link 
                                to={visitor_agreement.path} 
                                id={visitor_agreement.id}
                                onClick={props.onclose}
                            >
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: visitor_agreement.page
                                    }}
                                />
                            </Link>
                            <Link 
                                to={privacy_notice.path} 
                                id={privacy_notice.id}
                                onClick={props.onclose}
                            >
                                <span 
                                    dangerouslySetInnerHTML={{
                                        __html: privacy_notice.page
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MegaMenu