import React from 'react'
import { Link } from 'react-router-dom';

const NewsCards = ({ data}) => {
    const convertDate = (dateData) => {
        const months=['Januray','Feburary','March','April','May','June','July','August','September','October','November','December'];
        dateData=new Date(dateData).toLocaleString('en-IN')
        const date= dateData.split(',')[0].split('/');
        return `${months[date[1]-1]} ${date[0]}, ${date[2]}`;  
    }
    const image = data.images
    const dateData = data.date
    const title = data.title
    console.log(data);
    return (
        <>
            <div className="col" >
            <Link
                to={`/newspage/${data.id}`}
            >
                <div className="news-card h-100"
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='400'
                >
                    <img
                        src={image}
                        className="news-card-image"
                        alt=""
                    />
                    <div className="news-card-content">
                        <div className='news-card-date text-primary'>
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
                </div>
            </Link>
            </div>
        </>
    )
}

export default NewsCards