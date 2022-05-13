import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import sitemapData from "../../data/sitemap.json"
import AdvertiseWithUs from './advertisewithus'
import Investors from './investors'
import SustainabilityStatement from './sustainabilitystatement'

const CommercialPage = () => {
    const commercialSitemap = sitemapData.find(pageGroup => pageGroup.id === 'commercial')
    const { hash } = useLocation();

    const [activetab, setactivetab] = useState('advertise_with_us');

    useEffect(() => {
        setactivetab(hash.replace(/^(#)/, ""));
    }, [hash]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        const pageObject = commercialSitemap && commercialSitemap.pages.find(page => page.id === event.target.id);
        window.history.replaceState({}, pageObject.page, pageObject.path);
    }

    return (
        <React.Fragment>
            <SEO title='IMS - Commercial' />
            <div className="page-wrapper commercial-page-wrapper">
                <Header />
                <BannerNavigationContainer data={commercialSitemap} activetab={activetab} onClickTab={onClickTab} />
                {(() => {
                    switch (activetab) {

                        case "advertise_with_us":
                            return (
                                <AdvertiseWithUs />
                            );
                        case "investors":
                            return (
                                <Investors />
                            );
                        case "sustainability_statement":
                            return (
                                <SustainabilityStatement />
                            );
                        default:
                            return (
                                <AdvertiseWithUs />
                            );

                    }
                })()}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default CommercialPage