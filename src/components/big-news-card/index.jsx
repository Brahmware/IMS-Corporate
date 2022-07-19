import React from 'react'
import { InfoIcon, BlankIcon, StarFillIcon } from '../../assets/icons'
import { Link } from 'react-router-dom';

const BigNewsCard = ({ data, heading }) => {
    const stars=[1,2,3,4,5]
    const convertDate = (dateData) => {
        const months = ['Januray', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = dateData.split(',')[0].split('/');
        return `${months[date[1] - 1]} ${date[0]}, ${date[2]}`;
    }
    const image = data.images;
    const dateData = new Date(data.date).toLocaleString('en-IN')
    const title = (data.title.length > 170) ? data.title.substring(0, 170) + '...' : data.title;
    return (
        <>
            <Link
                to={`/newspage/${data.id}`}
            >
                <div className="news-card h-100">
                    <img
                        src={image}
                        className="news-card-image big-news-card-image"
                        alt=""
                    />
                    {
                        heading === true ?
                            <>
                                <div className="heading-content">
                                    <div className="heading-part">
                                        <div className='heading'>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: data.title
                                                }}
                                            />
                                        </div>
                                        <div className="rating-part">
                                            <div className="title">IMS dhaka</div>
                                            <div className="stars">
                                                {
                                                    stars.map((star, index) => {
                                                        return <StarFillIcon key={index}/>
                                                    })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-part">
                                        {data.content}
                                    </div>
                                    <div className="icon-part">
                                        <div className="blank"><BlankIcon /><span>{data.text}</span></div>
                                        <div className="info"><span><InfoIcon /></span></div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="news-card-content">
                                    <div className='news-card-date text-primary mt-3'>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: convertDate(dateData)
                                            }}
                                        />
                                    </div>
                                    <div className='news-card-title'>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: title
                                            }}
                                        />
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </Link>
        </>
    )
}

export default BigNewsCard