import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import sitemapData from "../../data/sitemap.json"
import AboutUs from './aboutus'
import Careers from './careers'
import DIversityAndInclusion from './diversityandinclusion'
import OurLeadership from './ourleadership'

const BusinessPage = () => {
    const businessSitemap = sitemapData.find(pageGroup => pageGroup.id === 'business')
    const { hash } = useLocation();

    const [activetab, setactivetab] = useState('about_us');

    useEffect(() => {
        setactivetab(hash.replace(/^(#)/, ""));
    }, [hash]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        /* setActiveTabName(event.target.) */
        const pageObject = businessSitemap && businessSitemap.pages.find(page => page.id === event.target.id);
        window.history.replaceState({}, pageObject.page, pageObject.path);
    }

    return (
        <React.Fragment>
            <SEO title={"IMS - Business"} />
            <div className="page-wrapper business-page-wrapper">
                <Header />
                <BannerNavigationContainer data={businessSitemap} activetab={activetab} onClickTab={onClickTab} />
                {(() => {
                    switch (activetab) {

                        case "about_us":
                            return (
                                <AboutUs />
                            );
                        case "our_leadership":
                            return (
                                <OurLeadership />
                            );
                        case "diversity_and_inclusion":
                            return (
                                <DIversityAndInclusion />
                            );
                        case "career":
                            return (
                                <Careers />
                            );
                        default:
                            return (
                                <AboutUs />
                            );

                    }
                })()}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default BusinessPage