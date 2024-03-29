import React from 'react'

const PricingContainer = (props) => {
    return (
        <div className='container pricing-container'>
            <div className="table-wrapper row row-cols-lg-3 row-cols-sm-2 row-cols-1">
                {
                    props.tabledata && props.tabledata.map((eachCard, key) => {
                        return (
                            <div className="col col-md-12" key={key}>
                                <div
                                    className="card-wrapper noselect"
                                    data-aos='fade-up'
                                    data-aos-duration='600'
                                    data-aos-delay={900 + 300 * key}
                                >
                                    <div className="each-card">
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
                                        eachCard.adjective &&
                                        <div className="adjective-tag-holder">
                                            <div className="adjective-tag title">
                                                <p><span>{eachCard.adjective}</span></p>
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