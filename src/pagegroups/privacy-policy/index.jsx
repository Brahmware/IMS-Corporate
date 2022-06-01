import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavigationContainer from "../../containers/common/navigationcontainer"
import SEO from '../../components/SEO'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'

/* Importing the related data */
// import sitemapData from "../../data/sitemap.json"
import PrivacyPolicyData from "../../data/privacy-policy-data.json"
import PrivacyPolicySitemapData from "../../data/privacy-policy-sitemap.json"
import VisitorAgreement from './visitor-agreement'
import PrivacyNotice from './privacy-notice'
import WebsiteAccessibilityStatement from './website-accessibilty-statement'
import CodeOfEthics from './code-of-ethics'
import Faqs from './faqs'

const PrivacyPolicyPage = () => {
    const PrivacyPolicySitemap = PrivacyPolicySitemapData.find(pageGroup => pageGroup.id === 'privacy_policy')
    const { hash } = useLocation();

    const [activetab, setactivetab] = useState('visitor_agreement');

    useEffect(() => {
        setactivetab(hash.replace(/^(#)/, ""));
    }, [hash]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        const pageObject = PrivacyPolicySitemap && PrivacyPolicySitemap.pages.find(page => page.id === event.target.id);
        window.history.replaceState({}, pageObject.page, pageObject.path);
        scrollToNavigationPanel();
    }

    const relatedData = PrivacyPolicyData.find(( data => data.id === activetab ));
    const relatedDataElements = relatedData && relatedData.elements;

    return (
        <React.Fragment>
            <SEO title={`IMS ${PrivacyPolicySitemap.pageGroup} - ${relatedData.pagename}`} />
            <div className="page-wrapper business-page-wrapper">
                <Header />
                <NavigationContainer data={PrivacyPolicySitemap} activetab={activetab} onClickTab={onClickTab} />
                <div className="page-content business-content">
                    {(() => {
                        switch (activetab) {

                            case "visitor_agreement":
                                return (
                                    <VisitorAgreement data={relatedDataElements}/>
                                );
                            case "privacy_notice":
                                return (
                                    <PrivacyNotice data={relatedDataElements }/>
                                );
                            case "website_accessibility_statement":
                                return (
                                   <WebsiteAccessibilityStatement data={relatedDataElements}/>
                                );
                            case "code_of_ethics":
                                return (
                                    <CodeOfEthics data={relatedDataElements}/>
                                );
                            case "faqs":
                                return (
                                    <Faqs data={relatedDataElements}/>
                                );
                            default:
                                return (
                                    <VisitorAgreement data={relatedDataElements}/>
                                );

                        }
                    })()}
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default PrivacyPolicyPage