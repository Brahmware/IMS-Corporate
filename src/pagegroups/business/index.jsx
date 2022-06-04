import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import AboutUs from './aboutus'
import Careers from './careers'
import DiversityAndInclusion from './diversityandinclusion'
import OurLeadership from './ourleadership'
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'

/* Importing the related data */
import sitemapData from "../../data/sitemap.json"
import BusinessData from "../../data/business.json"
import FloatinEarthButton from '../../components/floating-button'

const BusinessPage = () => {
    const businessSitemap = sitemapData.find(pageGroup => pageGroup.id === 'business')
    const { hash } = useLocation();

    const [activetab, setactivetab] = useState('about_us');

    useEffect(() => {
        setactivetab(hash.replace(/^(#)/, ""));
    }, [hash]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        const pageObject = businessSitemap && businessSitemap.pages.find(page => page.id === event.target.id);
        window.history.replaceState({}, pageObject.page, pageObject.path);
        scrollToNavigationPanel();
    }

    const relatedData = BusinessData.find((data => data.id === activetab));
    const relatedDataElements = relatedData && relatedData.elements;

    return (
        <React.Fragment>
            <SEO title={`IMS ${businessSitemap.pageGroup} - ${relatedData.pagename}`} />
            <div className="page-wrapper business-page-wrapper noselect">
                <Header />
                <BannerNavigationContainer data={businessSitemap} activetab={activetab} onClickTab={onClickTab} />
                <div className="page-content business-content">
                    {(() => {
                        switch (activetab) {

                            case "about_us":
                                return (
                                    <AboutUs data={relatedDataElements} />
                                );
                            case "our_leadership":
                                return (
                                    <OurLeadership data={relatedDataElements} />
                                );
                            case "diversity_and_inclusion":
                                return (
                                    <DiversityAndInclusion data={relatedDataElements} />
                                );
                            case "career":
                                return (
                                    <Careers data={relatedDataElements} />
                                );
                            default:
                                return (
                                    <AboutUs data={relatedDataElements} />
                                );

                        }
                    })()}
                </div>
                <FloatinEarthButton />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default BusinessPage