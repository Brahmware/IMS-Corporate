import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'
import Explorers from './explorers'
import Producers from './producers'

/* Importing the related data */
import sitemapData from "../../data/sitemap.json"
import CollaboratorsData from '../../data/collaborators.json'

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
        scrollToNavigationPanel();
    }

    const relatedData = CollaboratorsData.find(( data => data.id === activetab ));
    const relatedDataElements = relatedData && relatedData.elements;

    return (
        <React.Fragment>
            <SEO title={`IMS ${collaboratorsSitemap.pageGroup} - ${relatedData.pagename}`} />
            <div className="page-wrapper collaborators-page-wrapper">
                <Header />
                <BannerNavigationContainer data={collaboratorsSitemap} activetab={activetab} onClickTab={onClickTab} />
                {(() => {
                    switch (activetab) {

                        case "explorers":
                            return (
                                <Explorers data={relatedDataElements}/>
                            );
                        case "producers":
                            return (
                                <Producers data={relatedDataElements}/>
                            );
                        default:
                            return (
                                <Explorers data={relatedDataElements}/>
                            );

                    }
                })()}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default CollaboratorsPage