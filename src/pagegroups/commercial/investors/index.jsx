import React from 'react'
import { Switch, useRouteMatch, Redirect, Route } from 'react-router-dom';
import Advert from './advert';
import Ims from './ims';
import InvestorsContainers from './inverstorscontainers';
import Prasar from "./prasar"

const Investors = ({ data }) => {
    const { url, path } = useRouteMatch();
    const dataContainers = data && data.find(data => data.id === 'containers');
    const dataIms = data && data.find(data => data.id === 'ims');
    const dataAdvert = data && data.find(data => data.id === 'advert');
    const dataPrasar = data && data.find(data => data.id === 'prasar');
    return (
        <div className="advertise-with-us-page">
            <Switch>
                <Route path={`${path}`}
                    exact
                >

                    <Redirect to={`${path}/containers`} />
                </Route>
                <Route path={`${path}/containers`} component={() => <InvestorsContainers data={dataContainers.elements} url={url} />} />
                <Route path={`${path}/IMS`} component={() => <Ims data={dataIms.elements} />} />
                <Route path={`${path}/Advert`} component={() => <Advert data={dataAdvert.elements} />} />
                <Route path={`${path}/Prasar`} component={() => <Prasar data={dataPrasar.elements} />} />
                <Route path={`${path}/*`}>
                    <Redirect to={`${path}`} />
                </Route>
            </Switch>
        </div>
    )
}

export default Investors