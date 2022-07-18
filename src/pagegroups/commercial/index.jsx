import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import AdvertiseWithUs from './advertisewithus'
import Investors from './investors'
import SustainabilityStatement from './sustainabilitystatement'

/* Importing the related data */
import sitemapData from "../../data/sitemap.json"
import CommercialData from '../../data/commercial.json'
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'
import FloatinEarthButton from '../../components/floating-button'

const CommercialPage = () => {
    const PAGE_GROUP_NAME = 'commercial';
    const DEFAULT_PAGE = 'advertise_with_us';

    const commercialSitemap = sitemapData.find(pageGroup => pageGroup.id === PAGE_GROUP_NAME)
    const { url, path } = useRouteMatch();
    const history = useHistory().location;

    const getPageNameFromLink = (history, pageGroupName, defaultPage) => {
        let pathname = history && history.pathname;
        let pathstring = `/${pageGroupName}/`;
        let intermediate = pathname.replace(pathstring, "");
        let pagenameArray = intermediate.split('/');
        let pageName = pagenameArray.length > 0 && pagenameArray[0];
        return pageName !== '' ? pageName : defaultPage
    }

    const [activetab, setactivetab] = useState(getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE));

    useEffect(() => {
        let activeTabname = getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE);
        let found = commercialSitemap.pages.find(each => each.id === activeTabname);

        if (found) {
            setactivetab(activeTabname);
        } else {
            setactivetab(DEFAULT_PAGE);
        }
    }, [commercialSitemap.pages, history]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        scrollToNavigationPanel();
    }

    const relatedData = CommercialData.find((data => data.id === activetab));
    const relatedDataElements = relatedData && relatedData.elements;

    return (
        <React.Fragment>
            <SEO title={relatedData && `IMS ${commercialSitemap.pageGroup} - ${relatedData.pagename}`} />
            <div className="page-wrapper commercial-page-wrapper">
                <Header />
                <BannerNavigationContainer data={commercialSitemap} activetab={activetab} onClickTab={onClickTab} url={url} />
                <Switch>
                    <Route
                        path={`${path}`}
                        exact
                    >
                        <Redirect to={`${path}/advertise_with_us`} />
                    </Route>
                    <Route
                        path={`${path}/advertise_with_us`}
                        component={() => <AdvertiseWithUs data={relatedDataElements} />}
                    />
                    <Route
                        path={`${path}/investors`}
                        component={() => <Investors data={relatedDataElements} />}
                    />
                    <Route
                        path={`${path}/sustainability_statement`}
                        component={() => <SustainabilityStatement data={relatedDataElements} />}
                    />
                    <Route path={`${path}/*`}>
                        <Redirect to={`${path}`} />
                    </Route>
                </Switch>
                <FloatinEarthButton />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default CommercialPage