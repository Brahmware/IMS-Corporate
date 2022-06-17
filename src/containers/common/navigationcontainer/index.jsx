import React from 'react'
import { Link } from 'react-router-dom';

const NavigationContainer = (props) => {
    const data = props.data;
    const activetab = props.activetab;
    return (
        <div className=" navigation-container">
            <div className="title-tabs-part noselect">
                <div
                    className="container tabs-container"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    {
                        data.pages && data.pages.map((eachPage, key) => {
                            return (
                                <Link key={key}
                                    id={eachPage.id}
                                    className={activetab && activetab === eachPage.id ? "each-tab active-tab" : "each-tab"}
                                    onClick={props.onClickTab}
                                    to={`${props.url}/${eachPage.id}`}
                                >
                                    <span>{eachPage.page}</span>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NavigationContainer