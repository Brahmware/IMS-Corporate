import React from 'react'
import { Switch, useRouteMatch, Redirect, Route } from 'react-router-dom';
import TechnologyContainers from './technologycontainers'
import Tech from './tech'
import Speech from './speech';
import Film from './film';

const Technology = ({ data }) => {
    const { url, path } = useRouteMatch();
    const dataContainers = data && data.find(data => data.id === 'containers');
    const dataTech = data && data.find(data => data.id === 'tech');
    const dataSpeech = data && data.find(data => data.id === 'speech');
    const dataFilm = data && data.find(data => data.id === 'film');
    return (
        <>
            {/* <TechnologyContainers data={dataContainers} /> */}
            

            <Switch>
                <Route path={`${path}`}
                    exact
                >

                    <Redirect to={`${path}/containers`} />
                </Route>
                <Route path={`${path}/containers`} component={() => <TechnologyContainers data={ dataContainers.elements} url={url} />} />
                <Route path={`${path}/Tech`} component={() => <Tech data={ dataTech.elements}/> } />
                <Route path={`${path}/Speech`} component={() => <Speech data={ dataSpeech.elements}/> } />
                <Route path={`${path}/Film`} component={() => <Film data={ dataFilm.elements}/> } />
                <Route path={`${path}/*`}>
                    <Redirect to={`${path}`} />
                </Route>
            </Switch>
        </>
    )
}

export default Technology