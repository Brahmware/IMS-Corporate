import React from 'react'
import { CopyIcon, ShareIcon } from '../../assets/icons'
import getCreatedXDaysAgo from '../../utils/getCreatedXDaysAgo'
import TextButton from '../buttons/TextButton'

const JobCardComponent = ({ data, cardKey }) => {

    const postingDayCalculation = () => {
        if (getCreatedXDaysAgo(data.jobpostdate) === 0) {
            return `Today`
        } else if (getCreatedXDaysAgo(data.jobpostdate) === 1) {
            return `1 day ago`
        } else {
            return `${getCreatedXDaysAgo(data.jobpostdate)} days ago`
        }
    }

    return (
        <div
            className='job-card-component noselect'
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-delay={300 + 600 * cardKey}
        >
            <div className="head-part">
                <div className="head-left">
                    <div className="job-title">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.jobtitle
                            }}
                        />
                    </div>
                    <div className="job-subtitle">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.jobsubtitle
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
                    <div className="job-icon"></div>
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
                    <div className="job-type">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.jobtype
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

export default JobCardComponent