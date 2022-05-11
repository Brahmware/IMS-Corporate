import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import sitemapData from "../../data/sitemap.json"

const CollaboratorsPage = () => {
    const collaboratorsSitemap = sitemapData.find(pageGroup => pageGroup.id === 'collaborators')
    const { hash } = useLocation();

    const [activetab, setactivetab] = useState('explorers');

    useEffect(() => {
        setactivetab(hash.replace(/^(#)/, ""));
    }, [hash]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        const pageObject = collaboratorsSitemap && collaboratorsSitemap.pages.find(page => page.id === event.target.id);
        window.history.replaceState({}, pageObject.page, pageObject.path);
    }

    return (
        <React.Fragment>
            <SEO title='IMS - Collaborators' />
            <div className="page-wrapper collaborators-page-wrapper">
                <Header />
                <BannerNavigationContainer data={collaboratorsSitemap} activetab={activetab} onClickTab={onClickTab} />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default CollaboratorsPage