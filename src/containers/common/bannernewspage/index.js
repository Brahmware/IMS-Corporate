import React from 'react'
import ParallaxImageComponent from '../../../components/parallax-image-component';

const BannerNewspage = (props) => {
    const data = props.data;
    const image=data.image
    const title=data.title
    const convertDate = (dateData) => {
        const months=['Januray','Feburary','March','April','May','June','July','August','September','October','November','December'];
        dateData=new Date(dateData).toLocaleString('en-IN')
        const date= dateData.split(',')[0].split('/');
        return `${months[date[1]-1]} ${date[0]}, ${date[2]}`;  
    }
    const date=data.date
    return (
        <div className="newspage-banner">
            <div className="h-100 banner-image" >
                <ParallaxImageComponent image={image} alt={"Loading Image"} positiontop={true}/>
            </div>
            <div className="newspage-content noselect">
                <div className="container">
                    <div
                        data-aos='fade-right'
                        data-aos-duration='600'
                        data-aos-delay='300'
                        className="newspage-title"
                    >
                        <span >
                            {title}
                        </span>
                    </div>
                    <div
                        data-aos='fade-right'
                        data-aos-duration='600'
                        data-aos-delay='600'
                        className="newspage-date"
                    >
                        <span>
                            {convertDate(date)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerNewspage