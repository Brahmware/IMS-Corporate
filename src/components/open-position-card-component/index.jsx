import React, { useEffect, useState } from 'react'
import { CopyIcon, ShareIcon } from '../../assets/icons'
import getCreatedXDaysAgo from '../../utils/getCreatedXDaysAgo'
import IconButton from '../buttons/Index'
import TextButton from '../buttons/TextButton'
import RemoteIconComponent from '../remoeiconcomponent'

const PositionCardComponent = ({ data, cardKey, country, continent }) => {

    const [positionTitleTextHolderRef, setPositionTitleTextHolderRef] = useState(null)
    const [positionTitleRef, setPositionTitleRef] = useState(null)

    const [positionTitleWidth, setpositionTitleWidth] = useState(0)
    const [positionTitleTextWidth, setpositionTitleTextWidth] = useState(0)

    useEffect(() => {

        if (positionTitleRef && positionTitleTextHolderRef) {
            positionTitleRef && setpositionTitleWidth(positionTitleRef.getBoundingClientRect().width)
            positionTitleTextHolderRef && setpositionTitleTextWidth(positionTitleTextHolderRef.getBoundingClientRect().width)
        }

    }, [positionTitleRef, positionTitleTextHolderRef, country, continent])

    const handleMouseEnter = () => {

        let movementAmount = positionTitleTextWidth - positionTitleWidth

        let buffer = 10

        if (positionTitleTextHolderRef && movementAmount > buffer) {
            positionTitleTextHolderRef.style.transform = `translateX(${-movementAmount}px)`
            positionTitleTextHolderRef.style.transition = "transform 1500ms ease 300ms"
        }
    }

    const handleMouseLeave = () => {
        if (positionTitleTextHolderRef) {
            positionTitleTextHolderRef.style.transform = "translateX(0px)"
        }
    }

    const postingDayCalculation = () => {
        if (getCreatedXDaysAgo(data.positionpostdate) === 0) {
            return `Today`
        } else if (getCreatedXDaysAgo(data.positionpostdate) === 1) {
            return `1 day ago`
        } else {
            return `${getCreatedXDaysAgo(data.positionpostdate)} days ago`
        }
    }




    /* Onclick copy and chare handler */

    const handleCopyOnClick = () => {

    }

    const handleShareOnClick = () => {

    }


    /* Onclick copy and chare handler */

    const handleApplyOnClick = () => {

    }

    const handleViewMoreOnClick = () => {

    }


    return (
        <div
            className='position-card-component'
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-delay={300 + 600 * cardKey}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="head-part">
                <div className="head-left">
                    <div
                        className="position-title"
                        ref={setPositionTitleRef}
                    >
                        <div
                            className="position-title-text-holder"
                            ref={setPositionTitleTextHolderRef}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: data.positiontitle
                                }}
                            />
                        </div>
                    </div>
                    <div className="position-subtitle">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.positionsubtitle
                            }}
                        />
                    </div>
                </div>
                <div className="head-right">
                    <div className="location">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.location.city
                            }}
                        />
                    </div>
                    <div className="post-date">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: postingDayCalculation()
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="description-part">
                <div className="description-left">
                    <div className="position-icon">
                        {console.log(data.icon)}
                        <RemoteIconComponent icon={data.icon} />
                    </div>
                </div>
                <div className="description-middle">
                    <div className="copy-link">
                        <IconButton iconComponent={<ShareIcon />} buttonOnclick={handleShareOnClick}/>
                    </div>
                    <div className="share-link">
                        <IconButton iconComponent={<CopyIcon/>} buttonOnclick={handleCopyOnClick}/>
                    </div>
                </div>
                <div className="description-right">
                    <div className="position-type">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.positiontype
                            }}
                        />
                    </div>
                    <div className="short-description">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.shortdescription
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="action-part">
                <div className="apply-button">
                    <TextButton text={"APPLY"} onClick={handleApplyOnClick}/>
                </div>
                <div className="view-more-button">
                    <TextButton text={"VIEW MORE"} onClick={handleViewMoreOnClick}/>
                </div>
            </div>
        </div>
    )
}

export default PositionCardComponent