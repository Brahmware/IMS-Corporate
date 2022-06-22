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
    const ANIMATION_TIME = 600;

    useEffect(() => {
        mediaDimensions && setMediaStyle({ width: mediaDimensions.height * MEGA_MENU_ASPECT_RATIO })
    }, [mediaDimensions])

    const MEGAMENU_DEFAULT_MEDIA = '/images/megamenu-default-media.webm';
    const [megaMenuMedia, setMegaMenuMedia] = useState(MEGAMENU_DEFAULT_MEDIA);
    const [inTransition, setInTransition] = useState(false);
    const [removeRolldownTimer, setRemoveRolldownTimer] = useState();

    let handleMediaChange = (media) => {
        let mediaShutter = document.getElementById('media-shutter');

        setTimeout(() => {
            setMegaMenuMedia(media);
        }, ANIMATION_TIME / 2)

        if (!inTransition) {
            setTimeout(() => {
                mediaShutter.classList.add("roll-up");
                setInTransition(true)
            }, 0)

            let rollDownTimer = setTimeout(() => {
                mediaShutter.classList.remove('roll-up');
                setInTransition(false)
            }, ANIMATION_TIME)
            setRemoveRolldownTimer(rollDownTimer);

        } else {

            clearTimeout(removeRolldownTimer);

            let rollDownTimer = setTimeout(() => {
                mediaShutter.classList.remove('roll-up');
                setInTransition(false)
            }, ANIMATION_TIME)
            setRemoveRolldownTimer(rollDownTimer)

        }
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
                            <div
                                className="media-holder"
                                ref={megaMenuMediaRef}
                                style={mediaStyle}
                            >
                                <div className="megamenu-media">
                                    <video src={megaMenuMedia} autoPlay loop muted alt="loading ..." />
                                </div>
                                <div
                                    className="media-shutter"
                                    id="media-shutter"
                                />
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