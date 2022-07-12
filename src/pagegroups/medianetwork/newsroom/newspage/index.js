import React from 'react'
import FloatingEarthButton from '../../../../components/floating-button'
import Footer from '../../../../containers/footer'
import Header from '../../../../containers/header'
import NewsPageContainerOne from '../../../../containers/newspage/container-1'
import NewsPageContainerTwo from '../../../../containers/newspage/container-2'
import NewsPageContainerThree from '../../../../containers/newspage/container-3'
import NewsPageContainerFour from '../../../../containers/newspage/container-4'
import newsData from "../../../../data/newspage.json";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Redirect, useRouteMatch } from "react-router-dom";

const NewsPage = () => {
    const filternews=newsData[0].elements;
    const pathname = window.location.pathname.split('/')
    const newsid=pathname[2];
    const finddata=newsid && filternews && (filternews).find(data => data.id === newsid)
    const data=finddata && finddata.elements
    const datacontainer1=data && (data).find(data => data.id === 'container_1').elements;
    const datacontainer2=data && (data).find(data => data.id === 'container_2').elements;
    const datacontainer3=data && (data).find(data => data.id === 'container_3').elements;
    const datacontainer4=data && (data).find(data => data.id === 'container_4').elements;
    const { url, path } = useRouteMatch();
    return (
        <React.Fragment>
            <div className="page-wrapper join-page-wrapper">
                <Header/>
                <Switch>
                    <Route
                        path={`${path}/`}
                        exact
                    >
                        <Redirect to={`/media_network/newsroom`} />
                    </Route>
                    <Route
                        path={`${path}/*`}
                    >
                        {
                            pathname.length<=3 && data?
                            <>
                                <NewsPageContainerOne data={datacontainer1} />
                                <NewsPageContainerTwo data={datacontainer2} />
                                <NewsPageContainerThree data={datacontainer3} />
                                <NewsPageContainerFour data={datacontainer4} />   
                            </>
                            :
                            <>
                                <Redirect to={`/media_network/newsroom`} />
                            </>
                        }
                    </Route>
                </Switch>
                <FloatingEarthButton />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default NewsPage