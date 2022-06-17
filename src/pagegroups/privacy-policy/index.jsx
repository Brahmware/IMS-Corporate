import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom'
import NavigationContainer from "../../containers/common/navigationcontainer"
import SEO from '../../components/SEO'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'

/* Importing the related data */
import PrivacyPolicyData from "../../data/privacy-policy-data.json"
import PrivacyPolicySitemapData from "../../data/privacy-policy-sitemap.json"
import VisitorAgreement from './visitor-agreement'
import PrivacyNotice from './privacy-notice'
import WebsiteAccessibilityStatement from './website-accessibilty-statement'
import CodeOfEthics from './code-of-ethics'
import Faqs from './faqs'

const PrivacyPolicyPage = () => {
    const PAGE_GROUP_NAME = 'privacy_policy';
    const DEFAULT_PAGE = 'visitor_agreement';

    const PrivacyPolicySitemap = PrivacyPolicySitemapData.find(pageGroup => pageGroup.id === PAGE_GROUP_NAME);

    const { url, path } = useRouteMatch();
    const history = useHistory().location;

    const getPageNameFromLink = (history, pageGroupName, defaultPage) => {
        let pathname = history && history.pathname;
        let pathstring = `/${pageGroupName}`;
        let intermediate = pathname.replace(pathstring, "");
        let pageName = intermediate.replace('/', "");
        return pageName !== '' ? pageName : defaultPage
    }

    const [activetab, setactivetab] = useState(getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE));

    useEffect(() => {
        let activeTabname = getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE);
        let found = PrivacyPolicySitemap.pages.find(each => each.id === activeTabname);
        
        if(found) {
            setactivetab(activeTabname);
        } else {
            setactivetab(DEFAULT_PAGE);
        }
        
    }, [PrivacyPolicySitemap, history]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        scrollToNavigationPanel();
    }

    const relatedData = PrivacyPolicyData.find((data => data.id === activetab));
    const relatedDataElements = relatedData && relatedData.elements;

    return (
        <React.Fragment>
            <SEO
                title={relatedData && `IMS ${PrivacyPolicySitemap.pageGroup} - ${relatedData.pagename}`}
            />
            <div className="page-wrapper business-page-wrapper">
                <Header />
                <NavigationContainer data={PrivacyPolicySitemap} activetab={activetab} onClickTab={onClickTab} url={url} />
                <div className="page-content business-content">
                    <Switch>
                        <Route
                            path={`${path}`}
                            exact
                        >
                            <Redirect to={`${path}/visitor_agreement`} />
                        </Route>
                        <Route
                            path={`${path}/visitor_agreement`}
                            component={() => <VisitorAgreement data={relatedDataElements} />}
                        />
                        <Route
                            path={`${path}/privacy_notice`}
                            component={() => <PrivacyNotice data={relatedDataElements} />}
                        />
                        <Route
                            path={`${path}/website_accessibility_statement`}
                            component={() => <WebsiteAccessibilityStatement data={relatedDataElements} />}
                        />
                        <Route
                            path={`${path}/code_of_ethics`}
                            component={() => <CodeOfEthics data={relatedDataElements} />}
                        />
                        <Route
                            path={`${path}/faqs`}
                            component={() => <Faqs data={relatedDataElements} />}
                        />
                        <Route path={`${path}/*`}>
                            <Redirect to={`${path}`} />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default PrivacyPolicyPage