import React from 'react';
import CopyrightComponent from '../../components/copyright';
import LanguageComponent from '../../components/languagecomponent';
import SiteMap from '../../components/sitemap';
import SocialLinks from '../../components/sociallinks';

const MegaMenu = (props) => {
    return (
        <div 
            className={props.show ? "megamenu open" : "megamenu"}
            style={{paddingTop: `${props.headerHeight}px`}}
        >
            <div className="page-wrapper megamenu-page">
                <div className="site-map-wrapper">
                    <div className="megamenu-image" >
                        <img src="/images/nav-image.png" alt="navimage" />
                    </div>
                    <SiteMap />
                </div>
                <div className="megamenu-footer container">
                    <div className="megamenu-footer-left">
                        <span className="contactus">CONTACT US</span>
                        <div className="socials"><SocialLinks/></div>
                        <div className="copyright"><CopyrightComponent/></div>
                    </div>
                    <div className="megamenu-footer-right">
                        <div/>
                        <div className="language-preference">
                            <LanguageComponent />
                        </div>
                        <div className="legals">
                            <a href="/visitor_agreement">Visitor Agreement</a>
                            <a href="/visitor_agreement">Privacy Notice</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MegaMenu