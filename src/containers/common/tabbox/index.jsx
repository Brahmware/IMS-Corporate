import React from 'react'
import FilledButton from '../../../components/buttons/FilledButton'

const TabBoxContainer = (props) => {
    const allData=props.data
    return (
        <div className="sub-container col"
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-delay={900 + 300 * props.tabkey}
        >
            <div className="box-button">
                <FilledButton class={'white-button'} text = { allData.button } />
            </div>
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