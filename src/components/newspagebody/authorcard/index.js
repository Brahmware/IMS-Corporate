import React from 'react'
import { Share2Icon, FacebookIcon, TwitterIcon , InstagramIcon, WhatsappIcon  } from '../../../assets/icons';


const AuthorCard = (props) => {
    const elements=props.elements[0];
    const links=elements.links[0];
    const icons={
        "facebook": <FacebookIcon />,
        "twitter": <TwitterIcon/>,
        "whatsapp": <WhatsappIcon/>,
        "instagram": <InstagramIcon/>
    }
    return (
        <>
            <div className="author-card"
                data-aos="fade-left"
                data-aos-duration='600'
                data-aos-delay='300'
            >
                <div className="profile-image">
                    <img src={elements.image} alt="" />
                </div>
                <div className='title' >COVERED BY</div>
                <div className='author' >{elements.name}</div>
                <div className="divider w-100"></div>
                <div className='title share-msg' >SHARE THIS NEWS</div>
                <div className="social">
                    {
                        Object.keys(links).map((key,index)=>{
                            return (
                                <React.Fragment key={index}>
                                    <a href={links[key]} target="_blank" rel="noopener noreferrer" className="social-icon">
                                        {icons[key]}
                                    </a>
                                </React.Fragment>
                            )
                        })
                    }
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Share2Icon/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default AuthorCard