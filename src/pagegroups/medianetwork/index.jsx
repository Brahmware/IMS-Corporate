import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import sitemapData from "../../data/sitemap.json"
import BusinessAndBrands from './businessandbrands'
import FocusAreas from './focusareas'
import NewsRoom from './newsroom'
import Technology from './technology'

const MediaNetworkPage = () => {
    const mediaNetworkSitemap = sitemapData.find(pageGroup => pageGroup.id === 'media_network')
    const { hash } = useLocation();

    const [activetab, setactivetab] = useState('business_and_brands');

    useEffect(() => {
        setactivetab(hash.replace(/^(#)/, ""));
    }, [hash]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        const pageObject = mediaNetworkSitemap && mediaNetworkSitemap.pages.find(page => page.id === event.target.id);
        window.history.replaceState({}, pageObject.page, pageObject.path);
    }

    return (
        <React.Fragment>
            <SEO title='IMS - Media Network' />
            <div className="page-wrapper media-network-page-wrapper">
                <Header />
                <BannerNavigationContainer data={mediaNetworkSitemap} activetab={activetab} onClickTab={onClickTab} />
                {(() => {
                    switch (activetab) {

                        case "business_and_brands":
                            return (
                                <BusinessAndBrands />
                            );
                        case "focus_areas":
                            return (
                                <FocusAreas />
                            );
                        case "technology":
                            return (
                                <Technology />
                            );
                        case "newsroom":
                            return (
                                <NewsRoom />
                            );
                        default:
                            return (
                                <BusinessAndBrands />
                            );

                    }
                })()}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default MediaNetworkPage