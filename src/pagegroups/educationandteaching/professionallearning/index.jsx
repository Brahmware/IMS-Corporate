import React from 'react'
import { Switch, useRouteMatch, Redirect, Route } from 'react-router-dom';
import Corporate from './corporate';
import Educator from './educator';
import Leaders from './leaders';
import ProfessionalLearningContainers from './professionallearningcontainers'


const ProfessionalLearning = ({ data }) => {
    
    const { url, path } = useRouteMatch();
    const dataContainers = data && data.find(data => data.id === 'containers');
    const dataCorporate = data && data.find(data => data.id === 'corporate');
    const dataLeaders = data && data.find(data => data.id === 'leaders');
    const dataEducator = data && data.find(data => data.id === 'educator');

    return (
        <div className='resources-page'>
            {/* <ProfessionalLearningContainers data={dataContainers} /> */}
            <Switch>
                <Route path={`${path}`}
                    exact
                >

                    <Redirect to={`${path}/containers`} />
                </Route>
                <Route path={`${path}/containers`} component={() => <ProfessionalLearningContainers data={dataContainers.elements} url={url} />} />
                <Route path={`${path}/Corporate`} component={() => <Corporate data={dataCorporate.elements} />} />
                <Route path={`${path}/Educator`} component={() => <Educator data={dataEducator.elements} />} />
                <Route path={`${path}/Leaders'`} component={() => <Leaders data={dataLeaders.elements} />} />
                <Route path={`${path}/*`}>
                    <Redirect to={`${path}`} />
                </Route>
            </Switch>
        </div>
    )
}

export default ProfessionalLearning