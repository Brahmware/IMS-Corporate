import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CopyrightComponent from '../../components/copyright';
import LanguageComponent from '../../components/languagecomponent';
import OurSocialLinks from '../../components/our-social-links';
import SiteMap from '../../components/sitemap';
import PrivacyPolicySitemapData from '../../data/privacy-policy-sitemap.json';
import useResizeObserver from '../../utils/useResizableObserver';

const MegaMenu = (props) => {

    const pages = PrivacyPolicySitemapData && PrivacyPolicySitemapData[0].pages;
    const visitor_agreement = pages && pages.find(page => page.id === 'visitor_agreement');
    const privacy_notice = pages && pages.find(page => page.id === 'privacy_notice');

    const megaMenuMediaRef = useRef(null);
    const mediaDimensions = useResizeObserver(megaMenuMediaRef);
    const [mediaStyle, setMediaStyle] = useState({});
    const MEGA_MENU_ASPECT_RATIO = 0.57;
    const TOTAL_ANIMATIONTIME = 600;

    useEffect(() => {
        mediaDimensions && setMediaStyle({ width: mediaDimensions.height * MEGA_MENU_ASPECT_RATIO })
    }, [mediaDimensions])


    const MEGAMENU_DEFAULT_MEDIA = '/images/megamenu-default-media.webm';
    const [megaMenuMedia, setMegaMenuMedia] = useState(MEGAMENU_DEFAULT_MEDIA);

    let handleMediaChange = (media) => {
        let megamenuMedia = document.getElementById('megamenu-media');
        megamenuMedia.classList.add("out");

        setTimeout(() => {
            megamenuMedia.classList.remove("out");
            megamenuMedia.classList.add('in');
            setMegaMenuMedia(media);
        }, TOTAL_ANIMATIONTIME / 2)

        setTimeout(() => {
            megamenuMedia.classList.remove('in');
        }, TOTAL_ANIMATIONTIME)
    }

    const onFocusOver = (event) => {
        let currentMedia = event.currentTarget.getAttribute("data-megamenumedia");
        handleMediaChange(currentMedia);
    }

    const onMouseOut = () => {
        handleMediaChange(MEGAMENU_DEFAULT_MEDIA);
    }

    return (
        <div
            className={props.show ? "megamenu open" : "megamenu"}
            style={{ paddingTop: `${props.headerHeight}px` }}
        >
            <div className="container h-100">
                <div className="page-wrapper megamenu-page">
                    <div className="site-map-wrapper">
                        <div className="site-map-container">
                            <div className="megamenu-media"
                                id='megamenu-media'
                                ref={megaMenuMediaRef}
                                style={mediaStyle}
                            >
                                <video src={megaMenuMedia} autoPlay loop muted alt="loading ..." />
                            </div>
                            <SiteMap onClickClose={props.onclose} onFocusOver={onFocusOver} onMouseOut={onMouseOut} />
                        </div>
                    </div>
                    <div className="megamenu-footer">
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
        </div>
    )
}

export default MegaMenu