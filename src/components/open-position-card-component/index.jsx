import React, { useRef, useEffect, useState } from 'react'
import { CopyIcon, ShareIcon } from '../../assets/icons'
import getCreatedXDaysAgo from '../../utils/getCreatedXDaysAgo'
import TextButton from '../buttons/TextButton'

const PositionCardComponent = ({ data, cardKey }) => {

    const positionTitleTextHolderRef = useRef(null)
    const positionTitleRef = useRef(null)

    const [positionTitleWidth, setpositionTitleWidth] = useState(0)
    const [positionTitleTextWidth, setpositionTitleTextWidth] = useState(0)


    useEffect(() => {

        console.log(positionTitleRef.current)

        positionTitleRef && setpositionTitleWidth(positionTitleRef.current.getBoundingClientRect().width)
        positionTitleTextHolderRef && setpositionTitleTextWidth(positionTitleTextHolderRef.current.getBoundingClientRect().width)

    }, [positionTitleRef, positionTitleTextHolderRef])


    const handleMouseEnter = () => {
        console.log(`title-text: ${positionTitleTextWidth}`)
        console.log(`title: ${positionTitleWidth}`)

        const movementAmount = positionTitleTextWidth - positionTitleWidth
        if (positionTitleTextHolderRef && movementAmount > 0) {
            positionTitleTextHolderRef.current.style.transform = `translateX(${-movementAmount}px)`
            positionTitleTextHolderRef.current.style.transition = "transform 1500ms ease 300ms"
        }
    }

    const handleMouseLeave = () => {
        if (positionTitleTextHolderRef) {
            positionTitleTextHolderRef.current.style.transform = "translateX(0px)"
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
                        ref={positionTitleRef}
                    >
                        <div
                            className="position-title-text-holder"
                            ref={positionTitleTextHolderRef}
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
                    <div className="position-icon"></div>
                </div>
                <div className="description-middle">
                    <div className="copy-link">
                        <ShareIcon />
                    </div>
                    <div className="share-link">
                        <CopyIcon />
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
                    <TextButton text={"APPLY"} />
                </div>
                <div className="view-more-button">
                    <TextButton text={"VIEW MORE"} />
                </div>
            </div>
        </div>
    )
}

export default PositionCardComponent