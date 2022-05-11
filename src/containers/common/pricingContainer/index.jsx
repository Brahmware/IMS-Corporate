import React from 'react'

const PricingContainer = (props) => {
    return (
        <div className='container pricing-container'>
            <div className="table-wrapper row row-cols-lg-3 row-cols-sm-2 row-cols-1">
                {
                    props.tabledata && props.tabledata.map((eachCard, key) => {
                        return (
                            <div className="col" key={key}>
                                <div
                                    className="card-wrapper"
                                    data-aos='fade-up'
                                    data-aos-duration='600'
                                    data-aos-delay={900 + 300 * key}
                                >
                                    <div className={eachCard.popular ? "each-card popular-card" : "each-card"}>
                                        <div className="table-header">
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: eachCard.pricetitle
                                                }}
                                            />
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: eachCard.price
                                                }}
                                            />
                                        </div>
                                        <div className="table-content">
                                            {
                                                eachCard.tableitems && eachCard.tableitems.map((eachItem, key) => {
                                                    return (
                                                        <React.Fragment key={key}>
                                                            <div className="table-item"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: eachItem
                                                                }}
                                                            />
                                                            {
                                                                eachCard.tableitems.length - 1 > key &&
                                                                <div className="item-divider" />
                                                            }
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {
                                        eachCard.popular &&
                                        <div className="most-popular-tag-holder">
                                            <div className="most-popular-tag title">
                                                <p><span>MOST POPULAR</span></p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PricingContainer