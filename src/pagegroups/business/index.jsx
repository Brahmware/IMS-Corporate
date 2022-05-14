import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import AboutUs from './aboutus'
import Careers from './careers'
import DIversityAndInclusion from './diversityandinclusion'
import OurLeadership from './ourleadership'

/* Importing the related data */
import sitemapData from "../../data/sitemap.json"
import BusinessData from "../../data/business.json"

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

    const relatedData = BusinessData.find(( data => data.id === activetab )).elements;

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
                                <AboutUs data={relatedData}/>
                            );
                        case "our_leadership":
                            return (
                                <OurLeadership data={relatedData}/>
                            );
                        case "diversity_and_inclusion":
                            return (
                                <DIversityAndInclusion data={relatedData}/>
                            );
                        case "career":
                            return (
                                <Careers data={relatedData}/>
                            );
                        default:
                            return (
                                <AboutUs data={relatedData}/>
                            );

                    }
                })()}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default BusinessPage