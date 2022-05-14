import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import sitemapData from "../../data/sitemap.json"
import AboutUs from '../../containers/business/about_us'
import OurLeadership from '../../containers/business/our_leadership'
import DiversityAndInclusion from '../../containers/business/diversity_and_inclusion'


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
    }

    return (
        <div className="page-wrapper business-page-wrapper">
            <Header />
            <BannerNavigationContainer data={businessSitemap} activetab={activetab} onClickTab={onClickTab} />
            {activetab === "about_us" ? <AboutUs /> :
                activetab === "our_leadership" ? <OurLeadership/> :
                    activetab === "diversity_and_inclusion" ? <DiversityAndInclusion/> :
                        activetab === "career" ? "career" :
                            "not working"

            }{console.log(activetab)}
            <Footer />
        </div>
    )
}

export default BusinessPage