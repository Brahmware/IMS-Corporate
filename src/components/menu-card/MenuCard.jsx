import React, { useState, useEffect } from 'react'
import MenuCardContent from '../menu-card-content/MenuCardContent'
import MenuCardTab from '../menu-card-tab/MenuCardTab'
import { useLocation } from "react-router-dom"
import ParallaxImageComponent from '../parallax-image-component'
import {useHistory} from "react-router-dom"
import FilledButton from '../buttons/FilledButton'

const MenuCard = (props) => {
    const location = useLocation();
    const history = useHistory();
    const [activetab, setactivetab] = useState(1)
    const scrolling = () => {
        document.getElementById(location.hash.slice(1, location.hash.length)).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }

    useEffect(() => {
        const state = Number(location.state)
        setactivetab(isNaN(state) ? 1 : state)
        if (location.hash === "") {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        else {
            scrolling();
        }

    }, [location.state])

    const [activeTabContent, setActiveTabContent] = useState({});
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        setActiveTabContent(props.cards && props.cards.find(card => card.id === activeTab))
    }, [activeTab, props.cards])

    const handleClick = (event) => {
        let activeTabId = event.currentTarget.id && Number(event.currentTarget.id);
        setActiveTab(activeTabId);
    }

    return (
        <div className="menu-card" id='menucard'>
            <div className='center-aligned-card'>
                <div
                    className="title menu-card-heading"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: props.title
                        }}
                    />
                </div>
            </div>
            {/* Wide Screen */}
            <div className="container menu-card-wide-screen">
                <div className="menu-card-tab-content d-flex pt-5">
                    <div
                        className="d-flex flex-column tab-column"
                        data-aos='fade-right'
                        data-aos-duration='600'
                        data-aos-delay='600'
                    >
                        {
                            (props.tabs).map((tab, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <MenuCardTab
                                            id={tab.subtitle}
                                            ids={key + 1}
                                            setactivetab={setactivetab}
                                            tabdata={tab}
                                            active={activetab === (key + 1) ? true : false}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                    <div
                        className="m-1 menu-card-content"
                        data-aos='fade-left'
                        data-aos-duration='600'
                        data-aos-delay='900'
                    >
                        <MenuCardContent card={props.cards[activetab - 1]} />
                    </div>
                </div>
            </div>

            {/* Mobile Screen */}
            <div className="menu-card-narrow-screen">
                <div className="pt-5 image-card">
                    <div className="image-part">
                        <ParallaxImageComponent image={activeTabContent.image} />
                    </div>
                    <div className="tab-list-component">
                        <div className="nav-part">
                            {
                                (props.tabs).map((tab, key) => {
                                    return (
                                        <React.Fragment key={key}>
                                            <div
                                                className={Number(tab.id) === activeTab ? 'tab active-tab' : 'tab'}
                                                id={tab.id}
                                                onClick={handleClick}
                                            >
                                                <div className="tab-inner">
                                                    <div className="title">
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: tab.title
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="subtitle">
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: tab.subtitle
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="divider"></div>
                                                    <div className="tab-content">
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: tab.content
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                        <div className="content">
                            <div className="title">
                                {activeTabContent.cardtitle}
                            </div>
                            <ul className="content-list">
                                {
                                    activeTabContent.cardcontentlist &&
                                    activeTabContent.cardcontentlist.map((item, key) => {
                                        return (<li key={key}>{item}</li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="action-button">
                        <FilledButton class={`join-button`} text={"JOIN"}
                            onClick={() => history.push('/join')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard
