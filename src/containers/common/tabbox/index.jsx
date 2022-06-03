import React from 'react'

const TabBoxContainer = (props) => {
    const allData=props.data
    return (
        <div className="sub-container col"
            // key={index}
            data-aos='fade-right'
            data-aos-duration='600'
            data-aos-delay='600'
        >
            <div className="box-button">
                <button>{allData.button}</button></div>
            <div
                className="tab-box-heading"
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: allData.tab_box_heading
                    }}
                />
            </div>
            <div
                className="tab-box-sub-heading"
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: allData.tab_box_sub_heading
                    }}
                />
            </div>
            <div className="divider"></div>
            <div
                className="tab-box-price"
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: allData.tab_box_price
                    }}
                />
            </div>
        </div>
    )
}

export default TabBoxContainer