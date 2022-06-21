import React from 'react'
import FilledButton from '../../../components/buttons/FilledButton'
import {  Link } from 'react-router-dom';

const TabBoxContainer = (props) => {
    // const history = useHistory()
    const allData = props.data
    // console.log(allData)
    return (
        <Link className="sub-container col"
            type="button"
            data-aos='fade-up'
            data-aos-duration='600'
            id={allData.tab_box_sub_heading}
            data-aos-delay={900 + 300 * props.tabkey}
            to={{
                pathname: 'partners/become_a_member',
                hash: `#${allData.tab_box_sub_heading}`,
                state: `${props.id }`

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
        </Link>
    )
}

export default TabBoxContainer