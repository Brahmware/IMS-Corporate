import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import sitemapData from "../../data/sitemap.json"

const CommercialPage = () => {
    const commercialSitemap = sitemapData.find(pageGroup => pageGroup.id === 'commercial')
    const { hash }  = useLocation();

    const [activetab, setactivetab] = useState('advertise_with_us');

    useEffect(() => {
        setactivetab (hash.replace(/^(#)/,""));
    }, [hash]);

    const onClickTab = ( event ) => {
        setactivetab(event.target.id);
        const pageObject = commercialSitemap && commercialSitemap.pages.find(page => page.id === event.target.id);
        window.history.replaceState({}, pageObject.page, pageObject.path);
    }

    return (
    <div className="page-wrapper commercial-page-wrapper">
        <Header />
        <BannerNavigationContainer data={commercialSitemap} activetab={activetab} onClickTab={onClickTab}/>
        <Footer/>
    </div> 
    )
}

export default CommercialPage