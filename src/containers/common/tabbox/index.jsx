import React from 'react'
import FilledButton from '../../../components/buttons/FilledButton'
import { useHistory } from 'react-router-dom';

const TabBoxContainer = (props) => {
    const history = useHistory()
    const allData = props.data
    return (
        <div className="sub-container col"
            type="button"
            data-aos='fade-up'
            data-aos-duration='600'
            id={allData.tab_box_sub_heading}
            data-aos-delay={900 + 300 * props.tabkey}
            onClick={() => {
                history.push({
                    pathname: 'partners',
                    hash: "#become_a_member",
                    state: `${props.id + 1}`
                })
            }}
        >
            <div className="box-button">
                <a href="/join"><FilledButton class={'white-button'} text={allData.button} /></a>
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