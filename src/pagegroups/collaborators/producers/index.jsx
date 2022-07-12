import React from 'react'
import { Switch, useRouteMatch, Redirect, Route } from 'react-router-dom';
import ProducersContainers from './producerscontainers';
import Ims from "./ims"
import Standard from './standard';
import Member from './member';


const Producers = ({ data }) => {
    const { url, path } = useRouteMatch();

    const dataContainer = data && data.find(data => data.id === 'containers');
    const dataIms = data && data.find(data => data.id === 'ims');
    const dataStandard = data && data.find(data => data.id === 'standard');
    const dataMember = data && data.find(data => data.id === 'member');
    return (
        <div className='immersive-experience-page'>
            
            <Switch>
                <Route path={`${path}`}
                    exact
                >

                    <Redirect to={`${path}/containers`} />
                </Route>
                <Route path={`${path}/containers`} component={() => <ProducersContainers data={ dataContainer.elements} url={url} />} />
                <Route path={`${path}/IMS`} component={() => <Ims data={ dataIms.elements}/> } />
                <Route path={`${path}/Standard`} component={() => <Standard data={ dataStandard.elements}/> } />
                <Route path={`${path}/Member`} component={() => <Member data={ dataMember.elements}/> } />
                <Route path={`${path}/*`}>
                    <Redirect to={`${path}`} />
                </Route>
            </Switch>
        </div>
    )
}

export default Producers