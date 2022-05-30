import React from 'react'

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
                                <div key={key}
                                    id={eachPage.id}
                                    className={activetab && activetab === eachPage.id ? "each-tab active-tab" : "each-tab"}
                                    onClick={props.onClickTab}
                                >
                                    <span>{eachPage.page}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NavigationContainer