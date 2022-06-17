import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import AboutUs from './aboutus'
import Careers from './careers'
import DiversityAndInclusion from './diversityandinclusion'
import OurLeadership from './ourleadership'
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'

/* Importing the related data */
import sitemapData from "../../data/sitemap.json"
import BusinessData from "../../data/business.json"
import FloatinEarthButton from '../../components/floating-button'

const BusinessPage = () => {
    const PAGE_GROUP_NAME = 'business';
    const DEFAULT_PAGE = 'about_us';

    const businessSitemap = sitemapData.find(pageGroup => pageGroup.id === PAGE_GROUP_NAME)
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
        let found = businessSitemap.pages.find(each => each.id === activeTabname);
        
        if(found) {
            setactivetab(activeTabname);
        } else {
            setactivetab(DEFAULT_PAGE);
        }
    }, [businessSitemap.pages, history]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        scrollToNavigationPanel();
    }

    const relatedData = BusinessData.find((data => data.id === activetab));
    const relatedDataElements = relatedData && relatedData.elements;

    return (
        <React.Fragment>
            <SEO title={relatedData && `IMS ${businessSitemap.pageGroup} - ${relatedData.pagename}`} />
            <div className="page-wrapper business-page-wrapper noselect">
                <Header />
                <BannerNavigationContainer data={businessSitemap} activetab={activetab} onClickTab={onClickTab} url={url} />
                <div className="page-content business-content">
                    <Switch>
                        <Route
                            path={`${path}`}
                            exact
                        >
                            <Redirect to={`${path}/about_us`} />
                        </Route>
                        <Route
                            path={`${path}/about_us`}
                            component={() => <AboutUs data={relatedDataElements} />}
                        />
                        <Route
                            path={`${path}/our_leadership`}
                            component={() => <OurLeadership data={relatedDataElements} />}
                        />
                        <Route
                            path={`${path}/diversity_and_inclusion`}
                            component={() => <DiversityAndInclusion data={relatedDataElements} />}
                        />
                        <Route
                            path={`${path}/career`}
                            component={() => <Careers data={relatedDataElements} />}
                        />
                        <Route path={`${path}/*`}>
                            <Redirect to={`${path}`} />
                        </Route>
                    </Switch>
                </div>
                <FloatinEarthButton />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default BusinessPage