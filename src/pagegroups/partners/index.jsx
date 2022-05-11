import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import sitemapData from "../../data/sitemap.json"

const PartnersPage = () => {
    const partnersSitemap = sitemapData.find(pageGroup => pageGroup.id === 'partners')
    const { hash } = useLocation();

    const [activetab, setactivetab] = useState('corporate_and_foundations');

    useEffect(() => {
        setactivetab(hash.replace(/^(#)/, ""));
    }, [hash]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        const pageObject = partnersSitemap && partnersSitemap.pages.find(page => page.id === event.target.id);
        window.history.replaceState({}, pageObject.page, pageObject.path);
    }

    return (
        <React.Fragment>
            <SEO title='IMS - Partners' />
            <div className="page-wrapper partners-page-wrapper">
                <Header />
                <BannerNavigationContainer data={partnersSitemap} activetab={activetab} onClickTab={onClickTab} />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default PartnersPage