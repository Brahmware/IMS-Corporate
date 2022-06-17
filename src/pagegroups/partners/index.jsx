import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom'
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
import FloatinEarthButton from '../../components/floating-button'

const PartnersPage = () => {
    const PAGE_GROUP_NAME = 'partners';
    const DEFAULT_PAGE = 'corporate_and_foundations';

    const partnersSitemap = sitemapData.find(pageGroup => pageGroup.id === PAGE_GROUP_NAME)
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
        let found = partnersSitemap.pages.find(each => each.id === activeTabname);
        
        if(found) {
            setactivetab(activeTabname);
        } else {
            setactivetab(DEFAULT_PAGE);
        }
    }, [history, partnersSitemap.pages]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        scrollToNavigationPanel();
    }

    const relatedData = partnersData.find((data => data.id === activetab));
    const relatedDataElements = relatedData && relatedData.elements;
    return (
        <React.Fragment>
            <SEO title={relatedData && `IMS ${partnersSitemap.pageGroup} - ${relatedData.pagename}`} />
            <div className="page-wrapper partners-page-wrapper">
                <Header />
                <BannerNavigationContainer data={partnersSitemap} activetab={activetab} onClickTab={onClickTab} url={url}/>
                <Switch>
                    <Route
                        path={`${path}`}
                        exact
                    > 
                        <Redirect to={`${path}/corporate_and_foundations`} />
                    </Route>
                    <Route
                        path={`${path}/corporate_and_foundations`}
                        component={() => <CorporateAndFoundations data={relatedDataElements} />}
                    />
                    <Route
                        path={`${path}/become_a_member`}
                        component={() => <BecomeAMember data={relatedDataElements} />}
                    />
                    <Route path={`${path}/*`}>
                            <Redirect to={`${path}`} />
                        </Route>
                </Switch>
                <Footer />
            </div>
            <FloatinEarthButton />
        </React.Fragment>
    )
}

export default PartnersPage