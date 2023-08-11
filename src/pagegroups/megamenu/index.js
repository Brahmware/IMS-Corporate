import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMSMascot } from '../../assets/ourlogo';
import CopyrightComponent from '../../components/copyright';
import LanguageComponent from '../../components/languagecomponent';
import OurSocialLinks from '../../components/our-social-links';
import SiteMap from '../../components/sitemap';
import PrivacyPolicySitemapData from '../../data/privacy-policy-sitemap.json';
import useResizeObserver from '../../utils/useResizableObserver';
import SiteMapData from "../../data/sitemap.json";

const MegaMenu = (props) => {
    const pages = PrivacyPolicySitemapData && PrivacyPolicySitemapData[0].pages;
    const visitor_agreement = pages && pages.find(page => page.id === 'visitor_agreement');
    const privacy_notice = pages && pages.find(page => page.id === 'privacy_notice');

    const megaMenuMediaRef = useRef(null);
    const mediaDimensions = useResizeObserver(megaMenuMediaRef);
    const [mediaWidth, setMediaWidth] = useState(0);
    const MEGA_MENU_ASPECT_RATIO = 0.57;
    const ANIMATION_TIME = 600;

    useEffect(() => {
        mediaDimensions && setMediaWidth(mediaDimensions.height * MEGA_MENU_ASPECT_RATIO)
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

    const [activeSubMenu, setactiveSubMenu] = useState(0)
    const handleMenuChange=(key)=>{
        setactiveSubMenu(key);
    }

    return (
        <div
            className={props.show ? "megamenu open" : "megamenu"}
            style={{ paddingTop: `${props.headerHeight}px`, height: `${window.innerHeight} !important` }}
        >
            <div className="page-wrapper-container container h-100">
                <div className="page-wrapper megamenu-page">
                    <div className="site-map-wrapper">
                        <div className="site-map-container">
                            <div
                                className="media-holder"
                                ref={megaMenuMediaRef}
                                style={{width: mediaWidth}}
                            >
                                <div className="megamenu-media">
                                    <video src={megaMenuMedia} autoPlay loop muted alt="loading ..." />
                                </div>
                                <div
                                    className="media-shutter"
                                    id="media-shutter"
                                >
                                    <div className="mascot" style={{width: mediaWidth * 0.4}}>
                                        <IMSMascot />
                                    </div>
                                </div>
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
            <div className="megamenu-page-mb page-wrapper">
                    <div className="site-map-menu-mb">
                        <div className="image-holder">
                            <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" />
                        </div>
                        <div className="overlay"/>
                        <div className="site-menu-mb">
                            {
                                SiteMapData.map((group, groupKey) => {
                                    return (
                                        <React.Fragment key={groupKey}>
                                            <div className="group-title-mb">
                                                <span className='title-mb'
                                                    onClick={()=>handleMenuChange(groupKey)}
                                                >{group.pageGroup}
                                                </span>
                                            </div>
                                            <ul className={groupKey===activeSubMenu?'active':''} >
                                                {
                                                    group.pages.map((subgroup, pageKey) => {
                                                        return (
                                                            <li className='page-mb' key={pageKey}>
                                                                <a
                                                                    id={subgroup.id}
                                                                    href={subgroup.path}
                                                                    // onClick={navigationOnClick}
                                                                >
                                                                    {subgroup.page}
                                                                </a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="container h-100">
                        <div className="megamenu-footer">
                            <div className="megamenu-footer-left">
                                <div className="socials"><OurSocialLinks /></div>
                                <div className="language-preference">
                                    <LanguageComponent />
                                </div>
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
                            <div className="copyright"><CopyrightComponent /></div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default MegaMenu


