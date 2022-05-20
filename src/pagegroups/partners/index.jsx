import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import BecomeAMember from './becomeamember'
import CorporateAndFoundations from './corporateandfoundations'

/* Importing the related data */
import partnersData from "../../data/partners.json"
import sitemapData from "../../data/sitemap.json"
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'

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
        scrollToNavigationPanel();
    }

    const relatedData = partnersData.find((data => data.id === activetab));
    const relatedDataElements = relatedData && relatedData.elements;
    // console.log(relatedDataElements)
    return (
        <React.Fragment>
            <SEO title={`IMS ${partnersSitemap.pageGroup} - ${relatedData.pagename}`} />
            <div className="page-wrapper partners-page-wrapper">
                <Header />
                <BannerNavigationContainer data={partnersSitemap} activetab={activetab} onClickTab={onClickTab} />
                {(() => {
                    switch (activetab) {

                        case "corporate_and_foundations":
                            return (
                                <CorporateAndFoundations data={relatedDataElements}/>
                            );
                        case "become_a_member":
                            return (
                                <BecomeAMember data={relatedDataElements}/>
                            );
                        default:
                            return (
                                <CorporateAndFoundations data={relatedDataElements}/>
                            );

                    }
                })()}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default PartnersPage